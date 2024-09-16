
<script>

    let title = 'Ninja Gaming Guide'

    const updateTitle = () => {
        title = "Something completely different"
    }

</script>

<div class="text-center block mt-5 mb-10 mx-auto">

    <h2>{title}</h2>
    <p class="p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor at ipsum temporibus possimus, dolore asperiores ea eaque nemo corrupti minus.
        Doloremque dolorem sequi mollitia aperiam in similique optio. Perspiciatis, accusamus qui deserunt amet nihil optio voluptas repellendus non minima blanditiis?
        Dignissimos facere error sed nam doloribus. Ex, voluptatibus iste, id quae veritatis velit, numquam esse sed dignissimos facere hic. Sint?
        Earum, modi totam, atque cumque minus vel molestias reiciendis aspernatur repellendus sit doloribus sequi sunt exercitationem ex. Perferendis, culpa fuga.
        Ut ullam accusamus possimus minus, at animi eveniet ea dolores doloribus sed maxime officiis atque vitae sequi perferendis expedita porro.
    </p>
    <button on:click={updateTitle}>Change Title</button>
    <input type="text" bind:value={title}>

</div>