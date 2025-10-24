//TODO: Tipado
export default function Modal({title, children, onClose}){
  return (
    <article className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 z-30 cursor-pointer"
        >
          x
        </button>
        <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </article>
  );
}