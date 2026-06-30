export default function Header() {
    return (
        <header className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-700">
            <div className="font-bold text-xl text-blue-500">GAMER_GEAR</div>
            <input
                type="text"
                placeholder="Поиск..."
                className="bg-slate-800 rounded-lg px-4 py-2 w-1/3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Корзина
            </button>
        </header>
    );
}