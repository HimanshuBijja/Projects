import { Router, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
const client = new PrismaClient();
import zod from "zod";
import userMiddleware from "../middleware/userMiddleware";
import { ParsedUrlQuery } from "querystring";

const router = Router();

const signUpValidation = zod.object({
  username: zod.string().min(3).max(30).trim(),
  password: zod.string().min(3),
  firstname: zod.string().min(3).max(30).trim(),
  lastname: zod.string().min(3).max(30).trim(),
});

router.post("/signup", async (req, res): Promise<any> => {
  const { success } = signUpValidation.safeParse(req.body);
  if (!success) {
    return res.json({
      success: false,
      msg: "Enter valid inputs",
    });
  }
  const { username, password, firstname, lastname } = req.body;
  try {
    await client.users.create({
      data: {
        username,
        password,
        firstname,
        lastname,
      },
    });
    return res.json({
      msg: "Success",
    });
  } catch (e) {
    return res.json({
      success: false,
      msg: "Invalid Username/ Account already exists",
    });
  }
});

//signup Route

router.post("signup", async (req, res): Promise<any> => {
  const { username, password } = req.body;
  const existingUser = await client.users.findUnique({
    where: {
      username: username,
      password: password,
    },
  });
  if (!existingUser) {
    return res.json({
      success: false,
      msg: "Check email/ Password",
    });
  }

  return res.json({
    success: true,
    msg: "Successfully logged in",
  });
});

router.get("/bulk", async (req, res): Promise<any> => {
  interface Query {
    findUser: string;
    param2?: string;
  }

  const { findUser } = req.query as unknown as Query;

  const search = {
    contains: findUser,
    mode: "insensitive" as const,
  };

  const allUsers = await client.users.findMany({
    omit : {
        password : true
    },
    where: {
      OR: [
        {
          username: search,
        },
        {
          firstname: search,
        },
        {
          lastname: search,
        },
      ],
    },
  });

  console.log(allUsers);
  return res.json({
    allUsers
  });
});

async function testing() {
  const existingUser = await client.users.findFirst({
    where: {
      username: "testuser1",
      password: "abc@12",
    },
  });

  console.log(existingUser ? "success" : "fail");
}
// testing();

export default router;
