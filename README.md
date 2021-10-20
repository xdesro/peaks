![](https://repository-images.githubusercontent.com/419451445/068a3ae3-9eac-4876-81e5-93c37765a36a)

# Peaks

There are 58 peaks in Colorado exceeding 14,000' in elevation. This app is a log of which I have summited, and which yet remain :)

## 🚧 Setup and Local Dev

1. **Install dependencies.**
   ```sh
   npm i
   ```
2. **Run for local development.** Kicks off a _(mostly)_ hot-reloading server at `localhost:8080`.
   ```sh
   npm run start
   ```
3. **Build for deployment.** Serve from `dist/` directory.
   ```sh
   npm run build
   ```

## ⚡️ Things To Note

- Everything in that `initial` directory is just leftover from me converting an HTML table list of 14ers I found online to JSON structured in the format I need. The actual data the app consumes is in `src/_data/mountains.json`. I left `initial` there just in case I need to reset the project or something lol.

## 🏁 Enhancements

- [ ] **Total elevation gain** _(H/T [@leviboenish](https://github.com/leviboenish))_. Would have to add trailhead elevation to API, which is also tricky because there are multiple routes/trailheads per-summit.
- [ ] **Dynamic updates.** Would be sick to be able to authenticate and make a quick serverless call. I'm actually stoked on not using any JS for this so I might have to figure out how to handle serverless auth.
