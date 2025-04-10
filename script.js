// Elementos da inteface (DOM)
const elements = {
    photoGrid: document.getElementById("photoGrid"), // Container de grade de fotos
    uploadModal: document.getElementById("uploadModal"), // Modal de Upload
    addPhotoButton: document.getElementById("addPhotoBtn"), // Botão para abrir o Modal
    closeButton: document.querySelector(".close"), // Botão para fechar o Modal
    uploadForm: document.getElementById("uploadForm"), // Formulário de upload
    toast: document.getElementById("toast"), // Elemento para notificação 
    nameInput: document.getElementById("name"), // Input do nome da foto
    fileInput: document.getElementById("file"), // Input do arquivo da foto
}

// Configuração da aplicação
const config = {
    apiUrl: "http://localhost:4000/pictures" // Endpoint da API
    /* Colocar img Base 64 */ 
};
 
// Função de notificação temporaria
function showNotification(message, type = "success") {
   const { toast } = elements;

   toast.textContent = message; // Define o texto da mensagem
   toast.className = `toast ${type}`; // Aplica a classe do CSS (Muda de cor)
   toast.style.opacity = "1"; // Torna a notificação visivel
 
   // Configuração de temporizador para esconder a notificação (3, seg)
   setTimeout(() => {
    toast.style.opacity = "0"; // Faz a notificação desaparecer
   }, 3000);
}
 
// Função de manipulação de dados (Busca as fotos da API)
async function fetchPhotos() {
    try {
        //Faz requisição GET na API
        const response = await fetch(config.apiUrl)

        // Se a resposta não foi completa, mostra um erro 
        if (!response.ok){
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();
        
        // Retorna o Array de fotos ou vazio se não houver dados
        return data.pictures || [];
    } catch (error) {
        // Em caso de erro, mostra no console log 
        console.error("Falha ao carregar fotos", error);
        // Mostra a notificação de erro para o User
        showNotification("Falha ao carregar fotos", "error");
        // Retorna o array vazio para evitar erros no código
        return [];
    }
}

// Rendeniza as fotos no Grid (Recebendo um array de objetos de fotos)
function renderPhotoGrid(photos) {
    const { photoGrid } = elements;

    photoGrid.innerHTML = ""; // Limpa todo o conteúdo atual do Grid

    // Se não tiver nada no Array mostra a mensagem
    if (photos.length === 0) {
        photoGrid.innerHTML = '<p class="mo-photos">Nenhuma foto encontrada</p>';
        return;
    }
    // Para cada foto no array, cria um card e adiciona no Grid
    photos.forEach((photo) => {
        const photoCard = createPhotoCardElement(photo);
        photoGrid.appendChild(photoCard);
    });
}

// Cria o elemento HTML de um card de foto (recebe um objeto de foto)
function createPhotoCardElement(photo) {
    const card = document.createElement("div");
    card.className = "photo-card"; // aplica classe CSS
   
    // Montando a URL (API + ID da foto + /img)
    const imageUrl = `${config.apiUrl}/${photo._id}/img`;
   
      // Define o HTML interno do card (Imagem e Informações)
    card.innerHTML = `
              <img src="${imageUrl}" alt="${photo.name}"
                  onerror="this.onerror=null; this.src='${config.placeholderImage}'">
              <div class="photo-info">
                  <div class="photo-name">${photo.name}</div>
              </div>
              `;
   
    return card;
  }
   
// Função de gerenciamento (CRUD), Envia a foto para o servidor com FormData
async function uploadNewPhoto(formData) {
    try {
      // Faz requisição POST para a API com dados do formulário
      const response = await fetch(config.apiUrl, {
        method: "POST",
        body: formData,
      });
   
      // Se a resposta não for completa, mostra um erro
      if (!response.ok) {
        throw new Error("Falha ao fazer upload da foto");
      }
   
      // Exibe uma notificção para o usuário
      showNotification("Foto envida com sucesso");
      // Fecha o modal de upload
      closeUploadModal();
      // Limpa o formulário de upload
      elements.uploadForm.reset();
      // Recarrega as fotos para exibir a nova
      loadAndDisplayPhotos();
    } catch (error) {
      // Em caso de erro, mostra no console log
      console.error("Erro no upload:", error);
      // Exibe uma notificação de erro para o usuário
      showNotification("Falha ao enviar foto", "error");
    }
  }
/* Funções de controle de Interface */ 

// Abre o model de Upload (Mostra a janela de adicionar foto)
function openUploadModal() {
    elements.uploadModal.style.display = "block"; // Muda o CSS para block (Visivel)
}

function closeUploadModal() {
    elements.uploadModal.style.display = "none";// Muda o CSS para none (Invisivel)
}

// Fecha modal 
function handOutsideClick(event) {
    // Verifica se o click foi no model (Area escura ao redor)
    if (event.target === elements.uploadModal) {
        closeUploadModal();
    }
}

// Processa o envio 
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", elements.nameInput.value);
    formData.append("file", elements.fileInput.files[0]);

    uploadNewPhoto(formData);
}

async function loadAndDisplayPhotos() {
    const photos = await fetchPhotos();
    renderPhotoGrid(photos);
}

function setupEventListeners() {
    elements.addPhotoButton.addEventListener("click", openUploadModal);
    elements.closeButton.addEventListener("click", closeUploadModal);
    window.addEventListener("click", handOutsideClick);
    elements.uploadForm.addEventListener("submit", handleFormSubmit);
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners(); // 
  loadAndDisplayPhotos();
});