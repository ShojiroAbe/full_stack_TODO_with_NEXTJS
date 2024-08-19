import express from "express"
import type { Express, Request, Response } from "express"
import { PrismaClient } from '@prisma/client'

const app: Express = express();
const PORT = 8080;

app.use(express.json());
const prisma = new PrismaClient();

app.get("/allTodos", async (req: Request, res: Response) => {
  console.log("res", res);

  // prisma.todo の todo は、Prisma のクライアントが schema.prisma ファイルで定義された Todo モデルを参照しています。
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos)
  
});

app.post("/createTodo", async (req: Request, res: Response) => {
  console.log(req.body);
  
  try {
    const { title, isCompleted } = req.body;
    const createTodo = await prisma.todo.create({
      data: {
        title,
        isCompleted,
      }
    });
    return res.json(createTodo)
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.put("/editTodo/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id) //"/editTodo/:id"の「:id」部分の取得
    const { title, isCompleted } = req.body;
    const editTodo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        isCompleted,
      }
    });
    return res.json(editTodo)
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.delete("/deleteTodo/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id) //"/editTodo/:id"の「:id」部分の取得
    const deleteTodo = await prisma.todo.delete({
      where: { id },
    });
    return res.json(deleteTodo)
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});


app.listen(PORT, () => console.log("server is running"));



// send は、Express.js の Response オブジェクト (res) のメソッドの一つで、サーバーからクライアントにデータを送信するために使用されます。

// res.send() の役割
// 送信: res.send() は、サーバーからクライアントへレスポンスを送信します。レスポンスの内容は、テキスト、HTML、JSON など、さまざまな形式で指定できます。
// 自動的な終了: res.send() を呼び出すと、サーバーはレスポンスの送信を開始し、リクエスト処理を終了します。これにより、レスポンスのヘッダーとボディがクライアントに送信されます。

// res の型指定: res: Response という記述は、res という変数が Response 型のオブジェクトであることを示しています。この Response 型は、Express.js の Response オブジェクトを表しており、HTTP レスポンスをクライアントに返すための機能を提供します

// res オブジェクトの役割: res は、サーバーがクライアントに対して返すべきデータやステータスコードを設定するために使用されます。例えば、res.send() や res.json() を使ってデータを送信したり、res.status() でステータスコードを設定したりします。

// res.json() メソッド: res.json(data) は、渡された data を JSON 形式にシリアライズし、それを HTTP レスポンスの本文としてクライアントに送信します。ここでの data は通常、JavaScript オブジェクトや配列で、JSON 形式に変換されてクライアントに返されます。

// app.use(express.json()); を宣言することで、すべてのリクエストのボディが JSON フォーマットであると自動的に認識され、パースされます。これにより、リクエストボディのデータが req.body に自動的に JavaScript のオブジェクトとして格納されるため、個々のルートハンドラで JSON パースを手動で行う必要がなくなります。
// クライアントが JSON 形式で送信した title と isCompleted のデータを req.body から直接取得しています。
// app.use(express.json()); を使用しているので、リクエストボディが自動的にパースされ、req.body にはすでにオブジェクトとしてデータが格納されています。
// もし app.use(express.json()); がなかった場合、req.body は undefined になり、JSON データを処理することができません。
// app.use(express.json()); を使うことで、アプリケーション全体で JSON リクエストボディのパースが簡単に行えるようになります。特定のルートで個別に JSON パースを行う必要がないため、非常に便利で効率的