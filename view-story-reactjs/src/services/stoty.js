export function getList() {
    return fetch('http://localhost:8080/stories')
        .then(data => data.json())
}

export function getOne(id) {
    return fetch('http://localhost:8080/story/' + id)
        .then(data => data.json())
}

export function add(story) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            tentruyen: story.name,
            theloai: story.category,
            tacgia: story.author,
            noidung: story.content
        })
    };
    return fetch('http://localhost:8080/story', requestOptions)
        .then(response => response.json());
}

export function map(item, img) {
    return {
        id: item.ma,
        title: item.tentruyen,
        description: item.tacgia,
        imgUrl: img,
        link: item.ma
    }
}
