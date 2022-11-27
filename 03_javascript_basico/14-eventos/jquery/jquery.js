// $(selector).acción()

// $("h1").hide()

// $(document).ready(() => {
  $(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        // $("h3").hide()
        $("h3").fadeOut()
    })
    $(".show-btn").click(() => {
        // $("h3").show()
        $("h3").fadeIn()
    })

    $("li").dblclick(() => {
        $("h3").css({ color: "red" })
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
        //$("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })

})