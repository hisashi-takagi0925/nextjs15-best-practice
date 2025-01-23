"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>エラーが発生しました</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>もう一度試してください</button>
      </body>
    </html>
  );
}
