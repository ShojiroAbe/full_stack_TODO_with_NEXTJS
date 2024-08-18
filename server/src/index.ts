import { log } from "console";
import express from "express"
import type { Express, Request, Response } from "express"

const app: Express = express();
const PORT = 8080;

app.get("/appRodos", (req: Request, res: Response) => {
  console.log("res", res.send);
  
  return res.send("Todos");
});

app.listen(PORT, () => console.log("server is running"));



// send は、Express.js の Response オブジェクト (res) のメソッドの一つで、サーバーからクライアントにデータを送信するために使用されます。

// res.send() の役割
// 送信: res.send() は、サーバーからクライアントへレスポンスを送信します。レスポンスの内容は、テキスト、HTML、JSON など、さまざまな形式で指定できます。
// 自動的な終了: res.send() を呼び出すと、サーバーはレスポンスの送信を開始し、リクエスト処理を終了します。これにより、レスポンスのヘッダーとボディがクライアントに送信されます。