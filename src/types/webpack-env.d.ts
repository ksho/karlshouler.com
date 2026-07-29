// `require.context` (used by pages/postsPage.tsx to enumerate the posts) is a
// webpack API typed by @types/webpack-env, which augments NodeJS.Require.
// TypeScript's automatic @types inclusion no longer picks it up, so reference it
// explicitly here.
/// <reference types="webpack-env" />
