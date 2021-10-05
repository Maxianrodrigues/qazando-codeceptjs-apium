const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/Users/maxia/Downloads/app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "Pixel2",
        plataformVersion: "9",
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'qazando-automation',
  translation: 'pt-BR',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}