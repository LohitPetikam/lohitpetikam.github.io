function write_navbar() {
	nav_html = 
`
<div class="d-flex flex-wrap justify-content-center py-3 mb-4">
	<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
		<!-- <img src="./assets/images/test.png" class="bi me-2" width="40" height="40"><use xlink:href="#bootstrap"/></img> -->
		<span class="display-1 fs-1">Lohit Petikam, PhD</span>
	</a>

	<ul class="nav nav-pills">
		<li class="nav-item"><a href="#shading-rig" class="nav-link" aria-current="page">Shading Rig</a></li>
		<li class="nav-item"><a href="#research" class="nav-link">Research</a></li>
		<li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
		<li class="nav-item"><a href="#art" class="nav-link disabled"><span style="font-size: 80%; opacity:0.5">🚧</span> Art</a></li>
		<li class="nav-item"><a href="#music" class="nav-link disabled"><span style="font-size: 80%; opacity:0.5">🚧</span> Music</a></li>
		<li class="nav-item"><a href="https://www.notion.so/lohit/Lohit-Petikam-00cdaff499224fc0a3acd1fcfebcba94" class="nav-link">CV <span class="oi oi-external-link" style="font-size: 80%"></span></a></li>
	</ul>
</div>
`
	document.write(nav_html)
}

function write_project_card(card_info) {

	var card_html = `
<div class="col">
	<div class="card shadow-sm h-100">
`
	if (card_info.img) {
		card_html += `<img class="bd-placeholder-img card-img-top" src="./assets/images/${card_info.img}" style="height:200px; object-fit: cover;"></img>`
	}
	
	card_html += `
	<div class="card-body">
	`
	if (card_info.badge) {
			card_html += `<span class="badge bg-secondary">${card_info.badge}</span>`
	}
	card_html += `
			<p class="card-text lead">${card_info.title}</p>
			<div class="d-flex justify-content-between align-items-center">

				<div class="btn-group">
`
	if (card_info.modal) {
		card_html += `<button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#${card_info.modal}">View</button>`
	}
	if (card_info.project) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.project}"> Project</a>`
	}
	if (card_info.github_link) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.github_link}"> Github <span class="oi oi-external-link" style="font-size: 80%"></span></a>`
	}
	if (card_info.youtube) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.youtube}"> Video <span class="oi oi-video"></span></a>`
	}
	if (card_info.web) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.web}"> Web <span class="oi oi-globe"></span></a>`
	}
	if (card_info.pdf_link) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.pdf_link}"> PDF <span class="oi oi-external-link" style="font-size: 80%"></span></a>`
	}
	if (card_info.pdf_dl) {
		card_html += `<a type="button" class="btn btn-sm btn-outline-secondary" href="${card_info.pdf_dl}"> PDF <span class="oi oi-data-transfer-download" style="font-size: 80%"></span></a>`
	}
	card_html += `
				</div>
				`
	if (card_info.year) {
		card_html += `<small class="text-muted">${card_info.year}</small>`
	}
	card_html += `
			</div>
		</div>
	</div>
</div>
`

	document.write(card_html)
}


function siggraph_logo() {

	var logo_html = `

<svg width="190" height="45" version="1.1" id="siggraph-logo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 190 45.4" xml:space="preserve">
	<path fill="#101820" d="M22.7 0C10.2 0 0 10.2 0 22.7s10.2 22.7 22.7 22.7 22.7-10.2 22.7-22.7S35.3 0 22.7 0zM11.6 5.6c8.2-5.3 18.6-4 24.7 2.5-4-.8-11.3 1.6-18.8 6.4C10.3 19.2 4.8 25 3.8 29.1c-3.4-8.3-.3-18.3 7.8-23.5zM5.4 32.1c-.1-.1-.1-.2-.2-.3 0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1-.2-.5-.3-1.1-.1-1.9.8-3.8 6.1-9.4 13.3-14 9.7-6.3 17.9-7.7 19.9-5.5-2.9-1.3-9.7.7-16.3 5C14 20.1 9.2 26.5 11 29.3c1.1 1.7 4.5 1.7 8.7.3-6.6 3.4-12.5 4.5-14.3 2.5zm28.4 7.8c-8.2 5.3-18.6 4-24.7-2.5 4.1.7 11.4-1.7 18.8-6.5 7.2-4.7 12.7-10.5 13.7-14.5 3.4 8.2.4 18.2-7.8 23.5zm6.4-26.3c0 .1.1.1.1.2v.1c.3.5.3 1.2.1 2-.8 3.8-6.1 9.4-13.3 14-9.7 6.3-17.9 7.7-19.9 5.5 2.9 1.3 9.7-.7 16.3-5 7.8-5.1 12.6-11.4 10.8-14.2-1.1-1.7-4.5-1.7-8.7-.2 6.7-3.3 12.6-4.4 14.4-2.4.1-.2.2-.1.2 0zM64.8 15c-.5-.4-1.3-.7-2.4-1l-2.3-.5c-.9-.2-1.5-.4-1.7-.5-.4-.2-.6-.5-.6-.9 0-.5.2-.8.6-1.1.4-.3 1-.4 1.7-.4.6 0 1.2.1 1.6.3.6.3.9.8 1 1.6v.1h3v-.2C65.6 10.9 65 9.8 64 9c-1-.8-2.3-1.1-3.7-1.1-1.7 0-3.1.4-4 1.2-.9.8-1.4 1.8-1.4 3.1s.5 2.4 1.4 3c.6.4 1.5.7 3 1l1.4.3c.8.2 1.4.4 1.8.6.3.2.5.5.5.9 0 .7-.4 1.1-1.1 1.4-.4.1-.9.2-1.6.2-1.1 0-1.8-.3-2.2-.8-.2-.3-.4-.7-.5-1.3v-.1h-2.9v.2c0 1.4.5 2.6 1.6 3.4 1 .8 2.4 1.2 4.2 1.2 1.7 0 3.1-.4 4.1-1.2 1-.8 1.5-1.9 1.5-3.1 0-1.3-.5-2.3-1.3-2.9zM67 8.2h3.1v13.6H67zM77.5 22.2c1.1 0 2-.2 2.8-.7.4-.2.8-.6 1.3-1.1l.2 1.5h2.1v-7.4h-5.8V17h3c-.2.7-.5 1.4-1 1.8-.6.5-1.3.8-2.2.8-.9 0-1.7-.3-2.4-1-.7-.6-1.1-1.8-1.1-3.3 0-1.6.3-2.8 1-3.5.7-.8 1.5-1.2 2.5-1.2.5 0 1 .1 1.5.3.8.3 1.3.9 1.5 1.8v.1h3v-.2c-.2-1.3-.8-2.4-1.8-3.3-1-.9-2.4-1.3-4.2-1.3-2 0-3.6.7-4.8 2-1.2 1.3-1.8 3.1-1.8 5.3 0 2.2.6 3.9 1.8 5.1 1.1 1.1 2.6 1.8 4.4 1.8zM91.4 22.2c1.1 0 2-.2 2.8-.7.4-.2.8-.6 1.3-1.1l.2 1.5h2.1v-7.4H92V17h3c-.2.7-.5 1.4-1 1.8-.6.5-1.3.8-2.2.8-.9 0-1.7-.3-2.4-1-.7-.6-1.1-1.8-1.1-3.3 0-1.6.3-2.8 1-3.5.7-.8 1.5-1.2 2.5-1.2.5 0 1 .1 1.5.3.8.3 1.3.9 1.5 1.8v.1h3v-.2c-.2-1.3-.8-2.4-1.8-3.3-1-.9-2.4-1.3-4.2-1.3-2 0-3.6.7-4.8 2-1.2 1.3-1.8 3.1-1.8 5.3 0 2.2.6 3.9 1.8 5.1 1.1 1.1 2.6 1.8 4.4 1.8zM110.3 20.5c0-.2-.1-.6-.1-1.2v-.9c0-1-.1-1.7-.4-2.2-.2-.4-.6-.7-1-1 .6-.3 1-.7 1.3-1.2.3-.6.5-1.3.5-1.9 0-.5-.1-1-.3-1.5-.2-.4-.4-.8-.7-1.2-.4-.4-.8-.8-1.3-1-.5-.2-1.2-.3-2.2-.4h-6.5v13.6h3v-5.2h2.6c.7 0 1.2.1 1.5.4.3.3.4.8.4 1.6v1.2c0 .4 0 .8.1 1.2 0 .2.1.4.2.7v.1h3.3V21h-.1c-.1.1-.2-.2-.3-.5zm-7.6-9.6h2.9c.5 0 .9.1 1.2.2.5.2.7.7.7 1.5 0 .7-.2 1.1-.7 1.4-.3.1-.7.2-1.3.2h-2.8v-3.3zM116.4 8.2l-4.8 13.6h3.2l.9-2.7h4.7l.9 2.7h3.3l-4.8-13.6h-3.4zm3.1 8.3h-3l1.5-4.6 1.5 4.6zM128.5 17h2.6c1.5 0 2.6-.3 3.4-1 .8-.7 1.2-1.8 1.2-3.4 0-1.5-.4-2.6-1.2-3.3-.8-.7-1.9-1.1-3.2-1.1h-5.8v13.6h3.1V17zm0-6.1h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.4 0 .6-.2 1.1-.5 1.4-.3.3-.8.4-1.4.4h-2.3v-3.6zM140.2 15.9h4.9v5.9h3.1V8.2h-3.1v5.1h-4.9V8.2h-3v13.6h3zM163.1 19.3h-5.6c.1-.2.3-.3.4-.4.2-.2.7-.5 1.3-1l1-.7c.9-.6 1.5-1.2 1.9-1.7.6-.8.9-1.7.9-2.7 0-1.3-.4-2.4-1.3-3.1-.8-.8-2-1.2-3.4-1.2-1.8 0-3.1.7-3.8 2-.4.7-.6 1.6-.6 2.8v.2h2.8v-.1c0-.7.1-1.2.3-1.5.3-.5.7-.8 1.5-.8.5 0 .9.2 1.2.5.3.3.4.8.4 1.3 0 .6-.3 1.2-.8 1.8-.3.4-1.1 1-2.3 1.8-1.4 1-2.3 1.9-2.6 2.8-.4.8-.6 1.7-.6 2.6v.2h9.3v-2.8zM168.3 22.1c1.7 0 2.9-.6 3.6-1.8.7-1.2 1-2.9 1-5.1 0-2.2-.3-3.9-1-5.1-.7-1.2-1.9-1.8-3.6-1.8-1.7 0-2.9.6-3.6 1.8-.7 1.2-1 2.9-1 5.1 0 2.2.3 3.9 1 5.1.7 1.2 1.9 1.8 3.6 1.8zM167 11.8c.2-.7.7-1 1.4-1s1.1.3 1.4 1c.2.7.3 1.9.3 3.4s-.1 2.6-.3 3.4c-.2.7-.7 1.1-1.4 1.1s-1.1-.4-1.4-1.1c-.2-.8-.4-1.9-.4-3.4s.1-2.6.4-3.4zM177.6 18.8c.2-.2.7-.5 1.3-1l1-.7c.9-.6 1.5-1.2 1.9-1.7.6-.8.9-1.7.9-2.7 0-1.3-.4-2.4-1.3-3.1-.8-.8-2-1.2-3.4-1.2-1.8 0-3.1.7-3.8 2-.4.7-.6 1.6-.6 2.8v.2h2.8v-.1c0-.7.1-1.2.3-1.5.3-.5.7-.8 1.5-.8.5 0 .9.2 1.2.5.3.3.4.8.4 1.3 0 .6-.3 1.2-.8 1.8-.3.4-1.1 1-2.3 1.8-1.4 1-2.3 1.9-2.6 2.8-.4.8-.6 1.7-.6 2.6v.2h9.3v-2.6h-5.6c.1-.3.2-.5.4-.6zM187 21.8h2.9V8.5h-2.4v.2c0 .1 0 .2-.1.5-.1.4-.3.7-.5.9-.3.3-.7.5-1.2.6-.3.1-.9.1-1.7.2h-.1v2h3.1v8.9zM117.1 28.4c-.9 0-1.6.3-2.1.9-.5.6-.8 1.3-.8 2.3 0 .9.3 1.6.8 2.1s1.1.7 1.8.7c.5 0 .9-.1 1.2-.3.2-.1.3-.3.5-.4 0 .7-.1 1.2-.2 1.5-.2.6-.6.9-1.2.9-.3 0-.5-.1-.7-.2-.2-.2-.3-.4-.3-.6h-1.7c.1.7.4 1.3.9 1.7.5.4 1.1.6 1.8.6 1.4 0 2.3-.7 2.8-2 .3-.7.4-1.6.4-2.6 0-1.1-.1-2-.4-2.6-.6-1.4-1.5-2-2.8-2zm.8 4.3c-.2.1-.4.2-.7.2-.4 0-.8-.1-1-.4-.2-.3-.3-.6-.3-1.2s.2-1 .5-1.3c.2-.2.5-.2.7-.2.4 0 .7.1.9.4.2.3.3.7.3 1.2.1.6-.1 1.1-.4 1.3zM120.6 32.9h3.3v1.6h-3.3zM127.3 28.8c-.1.3-.2.5-.3.6-.2.2-.5.4-.8.5-.2 0-.6.1-1.1.1v1.2h2v6h1.8v-8.7h-1.4c-.2.1-.2.2-.2.3zM135.6 32.6c.2-.1.4-.2.6-.4.3-.4.5-.8.5-1.3 0-.7-.3-1.3-.8-1.7-.5-.4-1.2-.6-2-.6-.4 0-.8.1-1.1.2-.3.1-.6.3-.8.5-.3.3-.5.6-.7.9-.1.4-.2.8-.2 1.2h1.6c0-.4.1-.8.3-1 .2-.3.5-.4.9-.4s.6.1.8.3c.2.2.3.5.3.8 0 .5-.2.9-.6 1-.2.1-.6.2-1.2.2v1.2c.6 0 1 .1 1.2.2.5.2.7.6.7 1.1 0 .4-.1.8-.4 1-.2.2-.5.3-.9.3-.5 0-.9-.2-1.1-.6-.1-.2-.2-.5-.2-.9H131c0 .7.2 1.3.4 1.7.5.8 1.3 1.2 2.6 1.2 1 0 1.8-.3 2.3-.8.5-.6.8-1.2.8-1.9s-.2-1.3-.7-1.7c-.4-.4-.6-.5-.8-.5zM143.3 28.3l-3.2 8.8h1.9l.6-1.8h3.3l.6 1.8h2l-3.1-8.8h-2.1zm-.1 5.5l1.1-3.5 1.1 3.5h-2.2zM154.5 33.8c0 .6-.1 1.1-.2 1.3-.2.5-.7.7-1.5.7-.7 0-1.2-.2-1.5-.7-.1-.3-.2-.7-.2-1.3v-5.4h-1.9v5.4c0 .9.1 1.7.4 2.2.5 1 1.6 1.4 3.1 1.4s2.6-.5 3.1-1.4c.3-.5.4-1.3.4-2.2v-5.4h-1.9v5.4zM162 33.9h2c-.1.6-.3 1-.7 1.4-.4.4-.9.5-1.5.5s-1.2-.2-1.7-.7c-.5-.5-.7-1.2-.7-2.3 0-1.1.2-1.9.7-2.4.5-.5 1-.8 1.8-.8.4 0 .7.1 1 .2.5.2.9.7 1 1.3h1.8c-.1-.9-.5-1.6-1.2-2.1-.7-.6-1.6-.9-2.7-.9-1.3 0-2.3.4-3.1 1.3-.8.9-1.2 2-1.2 3.4s.4 2.5 1.2 3.3c.7.8 1.7 1.2 2.9 1.2.7 0 1.3-.1 1.8-.4.3-.2.6-.5 1-.9l.2 1.1h1.2v-4.7H162v1.5zM172.3 33.8c0 .6-.1 1.1-.2 1.3-.2.5-.7.7-1.5.7-.7 0-1.2-.2-1.5-.7-.1-.3-.2-.7-.2-1.3v-5.4H167v5.4c0 .9.1 1.7.4 2.2.5 1 1.6 1.4 3.1 1.4s2.6-.5 3.1-1.4c.3-.5.4-1.3.4-2.2v-5.4h-1.9v5.4zM181.8 32.8c-.3-.3-.8-.5-1.5-.6l-1.6-.4c-.6-.1-1-.3-1.2-.4-.3-.2-.4-.4-.4-.7 0-.3.1-.6.4-.8.3-.2.7-.3 1.2-.3.4 0 .8.1 1.1.2.4.2.7.6.7 1.1h1.8c0-.9-.4-1.7-1-2.2-.7-.5-1.5-.7-2.4-.7-1.1 0-2 .3-2.6.8-.6.5-.9 1.2-.9 2 0 .9.3 1.5.9 1.9.4.2 1 .5 1.9.7l1 .2c.6.1 1 .3 1.2.4.3.2.4.4.4.7 0 .5-.3.8-.8 1-.3.1-.6.1-1.1.1-.7 0-1.3-.2-1.6-.5-.2-.2-.3-.5-.3-.9h-1.8c0 .9.3 1.6 1 2.2.7.5 1.6.8 2.7.8s2-.3 2.6-.8c.6-.5.9-1.2.9-2 .2-.8-.1-1.4-.6-1.8zM182.8 28.3v1.6h2.7v7.3h1.9v-7.3h2.6v-1.6zM59.1 35l-1.9-6.7h-2l3 8.9h1.7l3-8.9H61zM63.6 28.3h1.8v8.8h-1.8zM73.7 36.4V35c0-.6-.1-1.1-.3-1.4-.2-.3-.5-.5-.9-.7.5-.2.8-.5 1-.9.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-.9-.1-.3-.3-.5-.4-.7-.2-.3-.5-.5-.8-.6-.3-.1-.8-.2-1.4-.2h-4.2v8.8h1.8v-3.5h1.8c.5 0 .9.1 1.1.3.2.2.3.6.3 1.1v.8c0 .3 0 .5.1.8 0 .1.1.3.1.5h2V37c-.1-.2-.2-.3-.3-.6zm-2.1-4.3c-.2.1-.5.1-.9.1h-2v-2.4h2c.4 0 .7.1.9.2.3.2.5.5.5 1.1 0 .5-.2.8-.5 1zM74.7 29.9h2.6v7.3h1.9v-7.3h2.6v-1.6h-7.1zM87.8 33.8c0 .6-.1 1.1-.2 1.3-.2.5-.7.7-1.5.7-.7 0-1.2-.2-1.5-.7-.1-.3-.2-.7-.2-1.3v-5.4h-1.9v5.4c0 .9.1 1.7.4 2.2.5 1 1.6 1.4 3.1 1.4s2.6-.5 3.1-1.4c.3-.5.4-1.3.4-2.2v-5.4h-1.9v5.4zM93.7 28.3l-3.2 8.8h1.9l.6-1.8h3.3l.6 1.8h2l-3.1-8.8h-2.1zm-.1 5.5l1.1-3.5 1.1 3.5h-2.2zM101.6 28.3h-1.9v8.9h6.3v-1.6h-4.4z"></path>
</svg>
`

	document.write(logo_html)
}

function write_gtag() {
	
	gtag_html = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WR9NEHL98X"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-WR9NEHL98X');
</script>
`	

	document.write(gtag_html)
}

function write_footer() {
	footer_html = `
<footer class="pt-5 my-5 text-muted border-top">
	&copy; 2021, Lohit Petikam <span id="date" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on top">🕑</span>
</footer>`
	document.write(footer_html)
}

function update_modified_date(_path) {
	const desiredRepo = "lohitpetikam.github.io";
	const dateTagClass = ".date";
	const path = _path;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			let response = JSON.parse(this.responseText);

			let commit_date = response[0].commit.committer.date;
			let date_str = new Date(commit_date).toString()
			
			$('#date').attr('data-bs-original-title', `Last modified: ${date_str}`);

			console.log(path)
		}
	};
	// https://api.github.com/repos/bertrandmartel/speed-test-lib/commits?path=jspeedtest%2Fbuild.gradle&page=1&per_page=1
	xhttp.open("GET", `https://api.github.com/repos/lohitpetikam/lohitpetikam.github.io/commits?path=${path}`, true);
	xhttp.send();
}

function init_tooltips() {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})
}

function add_modals(data) {
	// `<div id="thesis_modal_ph"></div>`
	// $(document).ready(function() {
	// 	$('#thesis_modal_ph').load("./thesis_modal.html");
	// });

	Object.keys(data).forEach(function(key) {
		let path = key
		let modal_name = data[key]
		document.write(`<div id="${modal_name}_ph"></div>`)

		$(document).ready(function() {
			$(`#${modal_name}_ph`).load(path);
		});
	})
}

function insert_SA2021_notif() {

	alert_html = `<div class="alert alert-info" role="alert">
				<span class="anim-slow-blink">📡</span> &nbsp The <a href="/ShadingRig/" class="alert-link">Shading Rig</a> technical talk is currently on-demand at <a href="https://siggraphasia.delegateconnect.co/talks/3d" class="alert-link">SIGGRAPH Asia 2021!  <span class="oi oi-external-link" style="font-size: 80%"></span></a>
			</div>`
	document.write(alert_html)
}
