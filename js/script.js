//bussiness logic
function small(selectedValue) {

    if (selectedValue == 500) {
        $("#small1").show(), $("#small2").show(), $("#small3").show(), $("#small4").show()

        $("#medium1").hide(), $("#medium2").hide(), $("#medium3").hide(), $("#medium4").hide()

        $("#large1").hide(), $("#large2").hide(), $("#large3").hide(), $("#large4").hide()

    } else if (selectedValue == 800) {

        $("#small1").hide()
        $("#small2").hide(), $("#small3").hide(), $("#small4").hide()

        $("#medium1").show(), $("#medium2").show(), $("#medium3").show(), $("#medium4").show()

        $("#large1").hide(), $("#large2").hide(), $("#large3").hide(), $("#large4").hide()

    } else if (selectedValue == 1200) {

        $("#small1").hide(), $("#small2").hide(), $("#small3").hide(), $("#small4").hide()

        $("#medium1").hide(), $("#medium2").hide(), $("#medium3").hide(), $("#medium4").hide()

        $("#large1").show(), $("#large2").show(), $("#large3").show(), $("#large4").show()
    }

}



    

   



