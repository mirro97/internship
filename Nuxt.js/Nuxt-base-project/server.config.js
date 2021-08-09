import Session from "express-session";
import MysqlSession from 'express-mysql-session';
import { mariaDbConnectionInfo } from "./system.config";


const getSession = () => {
  const MySqlStore = MysqlSession(Session);
  const sessionStore = new MySqlStore(mariaDbConnectionInfo);
  return Session({
    store: sessionStore,
    key: 'session_cookie_name',
    secret: "session_cookie_secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 8,
      // secure: true,
      sameSite: true
    }
  })
}

export { getSession };