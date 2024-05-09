import express from "express";
import cors from "cors";
import { config } from "dotenv";
import fetch from 'node-fetch';
import { GoogleGenerativeAI } from "@google/generative-ai";

config();
const app = express();

const corsOptions = {
    origin:['http://localhost:5173', 'http://localhost:5174']
}
app.use(cors(corsOptions))
app.use(express.json());

// Polyfill fetch, Headers, Request, and Response in the global scope
globalThis.fetch = fetch;
globalThis.Headers = fetch.Headers;
globalThis.Request = fetch.Request;
globalThis.Response = fetch.Response;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.send(text);
    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to generate content');
    }
});

app.listen(8080, () => console.log("server is running"));
