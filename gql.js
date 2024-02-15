function vidPop(id){
    video = new CustomEvent("vidPop",{bubbles: true, composed: true, detail: id })
    document.body.dispatchEvent(video)
    }