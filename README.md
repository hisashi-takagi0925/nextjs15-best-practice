## プロジェクト概要

このリポジトリは、Next.js 15 App Router のベストプラクティスと最新トレンドを反映しています。
JsonPlaceHolder から取得した投稿データの簡単な CRUD を実現するアプリです。
主にサーバーサイドレンダリングや静的サイト生成を活用し、SEO の最適化とパフォーマンスの向上を目指しています。

このプロジェクトは、最新のウェブ技術を活用し、ユーザーエクスペリエンスの向上を目指しています。

## 環境セットアップ手順

### pnpm のインストール

まず、`pnpm`をインストールします。`pnpm`は、Node.js のパッケージマネージャーの一つです。以下のコマンドを実行してインストールしてください：

```bash
npm install -g pnpm
```

### パッケージのインストール

次に、プロジェクトの依存パッケージをインストールします。プロジェクトのルートディレクトリで以下のコマンドを実行してください：

```bash
pnpm install
```

### アプリの起動

すべてのパッケージがインストールされたら、開発サーバーを起動します。以下のコマンドを実行してください：

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、アプリケーションが正しく動作しているか確認してください。

## Next.js 15 App Router のベストプラクティス

### データフェッチ

- **サーバーコンポーネントでデータを取得**: サーバーコンポーネントを使用してデータを取得することで、クライアント側の負荷を軽減し、パフォーマンスを向上させます。これにより、SEO の最適化も可能になります。

- **キャッシュ戦略**: データフェッチ時には、適切なキャッシュ戦略を設定することが重要です。`getStaticProps`や`getServerSideProps`を使用して、ページのキャッシュを制御し、ユーザーに最新のデータを提供します。

### コンポーネント分割

- **意味の通る最小単位の要素で分割**: コンポーネントは、再利用性と可読性を高めるために、意味のある最小単位で分割します。これにより、コードのメンテナンスが容易になり、バグの発生を防ぎます。

### ディレクトリ構造

- **ツリー形式でのディレクトリ構造**: プロジェクトのディレクトリ構造は、以下のように整理されています。

```bash
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
├── src
│ ├── app
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── (authorized)
│ │ └── posts
│ │ ├── layout.tsx
│ │ └── edit
│ │ └── [id]
│ │ ├── page.tsx
│ │ └── \_components
│ │ └── Form
│ │ ├── index.client.tsx
│ │ ├── Title
│ │ │ └── index.tsx
│ │ ├── Body
│ │ │ └── index.client.tsx
│ │ └── CancelButton
│ │ └── index.client.tsx
│ ├── domains
│ │ └── posts
│ │ └── repository
│ │ ├── getPost.ts
│ │ └── getPosts
│ │ └── tag.ts
│ ├── lib
│ │ └── shadcn
│ │ └── components
│ │ └── ui
│ │ ├── button.tsx
│ │ ├── dialog.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── input.tsx
│ │ ├── separator.tsx
│ │ ├── sheet.tsx
│ │ ├── sidebar.tsx
│ │ ├── skeleton.tsx
│ │ ├── table.tsx
│ │ ├── textarea.tsx
│ │ └── tooltip.tsx
│ ├── shared
│ │ ├── actions
│ │ │ └── client
│ │ │ └── useConfirmDiaog
│ │ │ └── index.ts
│ │ └── components
│ │ ├── server
│ │ │ ├── Table
│ │ │ │ └── index.tsx
│ │ │ ├── layout
│ │ │ │ └── MainLayout.tsx
│ │ │ └── skeletons
│ │ │ └── TableSkeleton
│ │ │ └── index.tsx
│ │ └── client
│ │ ├── ConfirmDialog.tsx
│ │ └── Input.tsx
│ └── utils
│ └── utils.ts
└── .next
```

## 使用ライブラリと選定理由

このプロジェクトでは、以下のライブラリを使用しています。それぞれの選定理由についても説明します。

### Next.js

- **選定理由**: Next.js は、React アプリケーションのサーバーサイドレンダリングや静的サイト生成を簡単に実現できるフレームワークです。SEO の最適化やパフォーマンスの向上が求められるプロジェクトに最適です。

### Radix UI

- **選定理由**: Radix UI は、アクセシブルでカスタマイズ可能な UI コンポーネントを提供します。アクセシビリティを重視した UI 開発が可能です。

### Lucide Icons

- **選定理由**: Lucide は、軽量でカスタマイズ可能なアイコンライブラリです。React コンポーネントとして簡単にアイコンを使用でき、デザインの一貫性を保つことができます。

### Zustand

- **選定理由**: Zustand は、シンプルでスケーラブルな状態管理ライブラリです。軽量でありながら、強力な状態管理機能を提供します。

### Tailwind CSS

- **選定理由**: Tailwind CSS は、ユーティリティファーストの CSS フレームワークで、迅速なスタイリングが可能です。プロジェクトのデザイン要件に柔軟に対応できます。

### Class Variance Authority (CVA)

- **選定理由**: CVA は、クラス名のバリアントを管理するためのライブラリです。コンポーネントのスタイルを柔軟に変更でき、デザインの一貫性を保つことができます。

### Conform

- **選定理由**: Conform は、フォームのバリデーションと状態管理を簡単に行うためのライブラリです。React と組み合わせて、フォームの管理を効率化します。また、サーバーアクションに対応しているため、サーバーサイドでの処理を簡単に統合できます。さらに、フォームの状態変更時の再レンダリングを最適化する機能を備えており、パフォーマンスの向上に貢献します。

### Zod

- **選定理由**: Zod は、スキーマベースのバリデーションライブラリで、TypeScript と組み合わせて型安全なデータバリデーションを実現します。

### Next.js Cache

- **選定理由**: Next.js のキャッシュ機能を利用することで、データの再検証やパフォーマンスの最適化が可能です。

これらのライブラリは、プロジェクトの機能性とユーザーエクスペリエンスを向上させるために選定されています。
