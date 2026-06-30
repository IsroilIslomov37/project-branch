export default function Main() {
    return (
        <main className="bg-slate-950 p-8 flex-grow">
            <h2 className="text-3xl text-white font-bold mb-8">Игровые новинки</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Карточка товара */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="h-40 bg-slate-800 rounded mb-4"></div>
                    <h3 className="text-white font-bold mb-2">Механическая клавиатура</h3>
                    <p className="text-blue-400 font-bold mb-4">4,500 ₽</p>
                    <button className="w-full py-2 bg-blue-600 rounded text-white font-bold hover:bg-blue-700">Купить</button>
                </div>
            </div>
        </main>
    );
}