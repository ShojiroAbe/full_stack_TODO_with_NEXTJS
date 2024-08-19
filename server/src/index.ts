import express from "express"
import type { Express, Request, Response } from "express"
import { PrismaClient } from '@prisma/client'

const app: Express = express();
const PORT = 8080;

const prisma = new PrismaClient();

app.get("/allTodos", async (req: Request, res: Response) => {
  console.log("res", res);

  // prisma.todo の todo は、Prisma のクライアントが schema.prisma ファイルで定義された Todo モデルを参照しています。
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos)
  
});

app.listen(PORT, () => console.log("server is running"));



// send は、Express.js の Response オブジェクト (res) のメソッドの一つで、サーバーからクライアントにデータを送信するために使用されます。

// res.send() の役割
// 送信: res.send() は、サーバーからクライアントへレスポンスを送信します。レスポンスの内容は、テキスト、HTML、JSON など、さまざまな形式で指定できます。
// 自動的な終了: res.send() を呼び出すと、サーバーはレスポンスの送信を開始し、リクエスト処理を終了します。これにより、レスポンスのヘッダーとボディがクライアントに送信されます。

// res の型指定: res: Response という記述は、res という変数が Response 型のオブジェクトであることを示しています。この Response 型は、Express.js の Response オブジェクトを表しており、HTTP レスポンスをクライアントに返すための機能を提供します

// res オブジェクトの役割: res は、サーバーがクライアントに対して返すべきデータやステータスコードを設定するために使用されます。例えば、res.send() や res.json() を使ってデータを送信したり、res.status() でステータスコードを設定したりします。

// res.json() メソッド: res.json(data) は、渡された data を JSON 形式にシリアライズし、それを HTTP レスポンスの本文としてクライアントに送信します。ここでの data は通常、JavaScript オブジェクトや配列で、JSON 形式に変換されてクライアントに返されます。