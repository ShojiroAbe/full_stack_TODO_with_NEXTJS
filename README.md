# full_stack_TODO_with_NEXTJS

## これを通して学べること
・Next.jsとNode .js (Express)とTypeScriptでフルスタックTodoアプリケーションが作れる
・AWS AmplifyとAppRunnerを使ってデプロイできる
・デプロイ時における環境変数の取り扱い
・CRUD操作できるPrismaを利用したAPIが作れる

## お手本にしたソースコード
フロントエンド
https://github.com/Shin-sibainu/todo-client
バックエンド
https://github.com/Shin-sibainu/todo-server

## Node.js・TypeScriptの開発環境構築
https://zenn.dev/hotcake34/scraps/a900eddb65302f

## Prisma ORM セットアップ
Prisma quickstart
https://www.prisma.io/docs/getting-started/quickstart

npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev

### npx prisma init --datasource-provider sqlite
これにより、prisma.schemaファイルを含む新しいprismaディレクトリが作成され、データベースとしてSQLiteが設定されます。これで、データをモデル化し、いくつかのテーブルを持つデータベースを作成する準備ができました。

### npx prisma migrate dev --name init
Prisma Migrateを使用してマイグレーションを実行し、データベース・テーブルを作成します。
この時点では、Prismaスキーマはありますが、データベースはまだありません。ターミナルでこのコマンドを実行して、SQLiteデータベースと、モデルで表されるテーブルを作成します。

### npx prisma studio
Prisma Studioでデータを表示
Prisma ORMには、データベースのデータを表示および編集するためのGUIが組み込まれています。