const tableDate = document.getElementById("tableContant");
const btnModal = document.getElementById("addProduct");
const modal = document.getElementById("modal");
const cancelar = document.getElementById("cancel");
const productName = document.getElementById("productName");
const productValue = document.getElementById("productValue");
const productQuantity = document.getElementById("productQuantify");
const btnSend = document.getElementById("send");
const btbCancel = document.getElementById("cancel")
const form = document.getElementById("form")
const erro = document.getElementById("erro")

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
function handleEdit(id){
alert(id)
}
function handleDelete(id){
alert(id)
}

function render(nome, preco, quantidade, total, id) {
  const result = (tableContant.innerHTML += `
            <tr class="even:bg-[#f2f2f2] odd:bg-white">
                <td class="p-3">${nome}</td>
                <td class="p-3">${preco}</td>
                <td class="p-3">${quantidade}</td>
                <td class="text-center p-3">${total}</td>
                <td class="flex gap-2 items-center justify-center p-3 ">
                <button onclick="handleEdit(${id})" class="py-1 px-2 bg-yellow-500 text-white rounded-md">Editar</button>
                <button onclick="handleDeleye(${id})" class="py-1 px-2 bg-red-800 text-white rounded-md">Deletar</button>
                </td>
            </tr>
            
        `);
  return result;
}
function renderDataTable() {
  tableDate.innerHTML = "";
  prodructs.map((product, index) => {
    const preco = formatDataToString(Number(product.preco));
    const total = product.preco * product.quantidade;
    const totalFormatado = formatDataToString(total);
    const data = render(product.nome, preco, product.quantidade, totalFormatado, index);
    

    return data;
  });
}

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
function erroOpen(){
  erro.classList.remove("hidden");
  erro.classList.add("block");
}
function erroClose(){
  erro.classList.remove("block");
  erro.classList.add("hidden");
}
btnModal.addEventListener("click", openModal);
function closeModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  erroClose()
  form.reset()
}
renderDataTable();


cancelar.addEventListener("click", closeModal);
function addProduct() {
if(productName.value && productQuantity.value && productValue.value){
  prodructs.push({
    nome: productName.value,
    preco: productValue.value,
    quantidade: productQuantity.value,
  });
  closeModal()
  

}else{
  erroOpen()
}
}

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  addProduct();
  renderDataTable()
});
btbCancel.addEventListener("click", function(e){
  e.preventDefault();
  closeModal()
})
