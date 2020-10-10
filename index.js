btn = document.getElementById('hearButton');
btn.addEventListener("click",
    function send_request(){
        console.log('here');
        const URL = "http://localhost:5000/api/test";
        var choice = document.getElementById("sel1");
        var speaker = choice.options[choice.selectedIndex].value;
        const data={
            target_text : document.getElementById("inputField").value,
            target_speaker : speaker
        };


        const params = {
            body : JSON.stringify(data),
            method : "POST",
            headers : {
                "content-type" : "application/json; charset=UTF-8"
            }
        };

        console.log("Sending info to the backend: ", params);
        
        fetch(URL, params)
            .then(async (res) => {
                r = res
                document.getElementById("audio_test").setAttribute("src", "http://localhost:5000/api/test/audio")
                document.getElementById("audio_test").setAttribute("type", "audio/mp3")
                let music = document.getElementById('music')
                await music.load()
                music.play()
            }
        );
    }
);
