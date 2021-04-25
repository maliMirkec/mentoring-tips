const doc = require('../site/_data/reads.json');

// Get document, or throw exception on error
try {
  if(!doc || !doc.length) {
    return false;
  }

  let list1 = '';
  let list2 = '';
  let list3 = '';

  if(doc[0].list && doc[0].list.length) {
    doc[0].list.forEach(item => {
      list1 += `
    <li>
      <p>
        <span><a href="${item.slink}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">${item.title}</strong><br><small style="color:#FF3366">${item.link}</small></a></span><br>
        <span>${item.desc}</span>
      </p>
    </li>`

      list2 += `
- [${item.title}](${item.slink})
${item.desc}

`

      list3 += `
${item.desc}
${item.link} ${!item.handle ? '' : item.handle.indexOf('@') !== -1 ? 'via ' + item.handle : 'by ' + item.handle}
#ui #uidev ${item.hash ? item.hash : ''}

More UI Dev links: https://bit.ly/2PazCGY.

-------------
`
    })
  }

  console.log('~~~~~~~~~~~~~')
  console.log('UI Newsletter')
  console.log('~~~~~~~~~~~~~')

  console.log(`
<a style="display:block;background:#eee;padding:2rem;text-decoration:none" href="${doc[0].slink}"><img alt="UI Dev Newsletter logo" class="tl-email-image" height="100" src="https://res.cloudinary.com/starbist/image/upload/v1619351897/uidevnewsletter-logo3_uhcdjf.png" style="margin: 0 auto; border: none; width: 400px; max-width: 400px;" width="400" /></a>
</a>

<div style="background:#fff;border:1px solid #eee;padding:2rem">
<h1><a href="${doc[0].slink}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">Issue #${doc.length}</strong></a></h1>

<h5><strong>${doc[0].date}</strong></h5>

<ul style="padding: 0">
  ${list1}
</ul>

<p>Happy coding!</p>
</div>
`);

  console.log('~~~~~~~~~~~~~')
  console.log('UI Post')
  console.log('~~~~~~~~~~~~~')

  console.log(`
${list2}

Happy coding!

[Subscribe to the newsletter here!](https://bit.ly/34155z3)
  `);


  console.log('~~~~~~~~~~~~~')
  console.log('UI Twitter')
  console.log('~~~~~~~~~~~~~')

  console.log(list3);
} catch (e) {
  console.log(e);
}
