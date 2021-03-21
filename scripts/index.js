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
        <span><a href="${item.slink}" target="_blank"><strong style="color:#FF3366">${item.title}</strong><br><small style="color:#FF3366">${item.link}</small></a></span><br>
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
<h1><a href="${doc[0].slink}" target="_blank"><strong style="color:#FF3366">UI Dev Newsletter #${doc.length}</strong></a></h1>

<h5><strong>${doc[0].date}</strong></h5>

<ul>
  ${list1}
</ul>

<p>Happy coding!</p>
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
