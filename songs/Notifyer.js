const Notifyer = {
    songs: {
        snob: "https://lasonotheque.org/UPLOAD/mp3/0022.mp3",
        attack: "./Songs/Snob.mp3"
    },
    icon: "https://rawcdn.githack.com/UnrecognizedBR/public/72b1f4a85aff9fceb9ed9c20f584d28314332a24/icons/48.png",
    init: async () => {
        if (!("Notification" in window)) return { active: false, msg: "Browser does not support notifications" }
        if ( Notification.permission !== "granted" ) return await Notifyer.requestPermission()
        return { active: true, msg: "Permission granted" }
    },
    
    requestPermission: async () => await Notification.requestPermission().then( permission => {
        if ( permission !== "granted" ) return { active: false, msg: "Permission denied" }
        return { active: true, msg: "Permission granted" }
    }),

    notify({ title, body, icon, requireInteraction = true }) {
        console.log("notify...")
        console.log(title, body, icon, requireInteraction)
        return new Notification(title, {
            action: [true],
            body,
            icon,
            requireInteraction
        })
    },

    notifyAudio({ song }) {
        console.log("notifyAudio...")
        console.log(song)
        return new Audio(song)
    }
}
export { Notifyer }