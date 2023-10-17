const tableDate = document.getElementById("tableContant");
const btnModal = document.getElementById("addProduct")
const modal = document.getElementById("modal")
const cancelar = document.getElementById("cancel")

const prodructs = [
  {
    nome: "IPhone X 64Gb Grey",
    preco: 999.9,
    quantidade: 12,
  },
  {
    nome: "Samsung S8 Black",
    preco: 756.9,
    quantidade: 10,
  },
];
function formatDataToString(value) {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valorFormatado;
}
function render(nome,preco,quantidade,total){
    const result = tableContant.innerHTML += `
            <tr class="even:bg-[#f2f2f2] odd:bg-white">
                <td class="p-3">${nome}</td>
                <td class="p-3">${preco}</td>
                <td class="p-3">${quantidade}</td>
                <td class="text-center p-3">${total}</td>
            </tr>
        `;
    return result
}
function renderDataTable() {
  prodructs.map((product) => {
    const preco = formatDataToString(product.preco);
    const total = product.preco * product.quantidade;
    const totalFormatado = formatDataToString(total);
    const data = render(product.nome,preco,product.quantidade,total)

    return data;
  });
}
renderDataTable();

function openModal(){
    modal.classList.remove("hidden")
    modal.classList.add("flex")
}
btnModal.addEventListener("click", openModal)
function closeModal(e){
    e.preventDefault()
    modal.classList.remove("flex")
    modal.classList.add("hidden")
}
cancelar.addEventListener("click", closeModal)