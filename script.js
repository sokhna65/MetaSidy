(function(){
    emailjs.init("620-JmQa6ZBvabVNv"); // Remplace par ton User ID
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
  
    emailjs.sendForm("service_exzzh5h", "template_hdyp13e", this)
      .then(() => {
        document.getElementById("message-status").innerText = "Message envoyé avec succès !";
        this.reset();
      }, (error) => {
        document.getElementById("message-status").innerText = "Échec de l'envoi du message.";
        console.error("Erreur :", error);
      });
  });
  
