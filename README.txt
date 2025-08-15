# アルカナデュエル CORE（GitHub Pages 用）
公開URL例: https://aktk-lab.github.io/arcana-duel/

## 使い方
1. GitHubで `arcana-duel` リポジトリを作成
2. 本ZIPの中身（index.html, manifest.webmanifest, sw.js, README.txt）を直下にアップロード
3. Settings → Pages → Deploy from a branch / main / /(root) → Save
4. 公開URLをスマホで開き、メニューから「ホーム画面に追加」（オフライン対応）

## メモ
- このCORE版は画像なし（PWAアイコンも後で追加パックを適用）。
- Service Workerは画像をキャッシュ対象にしていないので、欠けてもインストールが止まりません。
- 後で `assets/icons/` を追加してもOK（swは自動で新キャッシュに更新されます）。
