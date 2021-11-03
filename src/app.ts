import createError, { HttpError } from "http-errors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import consola from "consola";

// initialize configuration
dotenv.config();

// setup Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure routes
import indexRouter from "./routes/index";
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    const status = err.status || 500;
    res.status(status);
    res.json({
        status,
        message: err.message,
    });
    next();
});

// start the express server
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    consola.success(`server listening on port ${port}`);
});
