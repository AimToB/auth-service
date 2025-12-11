import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

// Hash given pwd
export async function hashPwd(pwd) {
  return bcrypt.hash(pwd, SALT_ROUNDS);
}

export async function verifyPwd(pwd, hash) {
  return bcrypt.compare(pwd, hash);
}
