export default function ModalItem({ product }) {
    return (
        <div className="flex items-center justify-between pb-4 pt-2 border-b-[1px] border-[--Rose-100]">
            <div className="flex items-start gap-2 justify-between">
                <img className="w-16 h-16 rounded-md" src={product.thumbnail} alt={product.name} loading="lazy" />
                <div>
                    <h1 className="font-bold text-[--Rose-900]">{product.name}</h1>
                    <div className="flex gap-2 items-center">
                        <p className="text-[--Red] font-semibold">{product.quantity}x</p>
                        <p className="text-[--Rose-500]"><span className="text-xs">@</span> ${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <h2 className="text-lg font-semibold">${(product.quantity * product.price).toFixed(2)}</h2>
        </div>
    )
}
