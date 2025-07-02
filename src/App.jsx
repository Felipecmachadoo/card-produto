import jordan4og from "./assets/jordan4.png";
import caminhao from "./assets/caminhao.svg";
import halfStar from "./assets/half-star.svg";
import star from "./assets/star.svg";
import "./App.css";

function App() {
  return (
    <div
      id="container"
      className="min-h-screen flex items-center justify-center"
    >
      <div id="card" className="max-w-sm rounded-xl shadow-2xl overflow-hidden">
        <img src={jordan4og} />
        <div id="content" className="p-8 space-y-6">
          <h1 className="text-3xl font-bold mb-6">Jordan 4 OG</h1>
          <p className="text-sm">
            Eleve seu estilo com o clássico reinventado. Conforto supremo
            encontra design inovador
          </p>
          <div id="rating" className="flex gap-2">
            <div id="star container" className="flex gap-2 [&_img]:size-4">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={halfStar} />
            </div>
            <span className="text-sm text-gray-500">4.9 (55 Avaliações)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-3xl font-bold text-sky-500">R$1.799,99</span>
            <button className="text-white text-sm py-2 px-4 rounded-full bg-linear-90 from-sky-500 to-indigo-900/50 cursor-pointer">
              Comprar agora
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <img src={caminhao} className="size-4" />
            <p className="text-xs text-gray-500">
              Frete grátis para todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
