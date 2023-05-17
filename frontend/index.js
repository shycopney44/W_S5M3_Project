function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav
  // 👉 TASK 1 - Write a `buildNav` component that returns a nav
  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let nav = document.createElement('nav')
    links.forEach(link => {
      let a = document.createElement('a')
      a.href = link.href
      a.title = link.title
      a.textContent = link.textContent
      a.addEventListener('click', evt => evt.preventDefault())
      nav.appendChild(a)
    })
    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  // ❗ DOM creation using your `buildNav` component (do not change):
  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card
  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card
  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div')
    card.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent = learner.fullName

    const dobP = document.createElement('p')
    dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const favLangP = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    favLangP.textContent = `Favorite Language: ${favLanguage.name}`

    const idElement = document.createElement('p')
    idElement.textContent = `Learner ID: ${learner.id}`

    card.appendChild(nameP)
    card.appendChild(idElement)
    card.appendChild(dobP)
    card.appendChild(favLangP)

    card.addEventListener('click', () => {
      const persons = document.querySelectorAll('.learner-card')
      persons.forEach(p => p.classList.remove('active'))
      card.classList.add('active')
    })
    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(personObj => {
      const card = buildLearnerCard(personObj, languages)
      document.querySelector('section').appendChild(card)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footer = document.createElement('footer')

    let companyInfoDiv = document.createElement('div')
    companyInfoDiv.classList.add('company-info')

    let companyNameP = document.createElement('p')
    companyNameP.classList.add('company-name')
    companyNameP.textContent = footerData.companyName

    let addressP = document.createElement('p')
    addressP.classList.add('address')
    addressP.textContent = footerData.address

    let contactEmailP = document.createElement('p')
    contactEmailP.classList.add('contact-email')
    contactEmailP.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`

    companyInfoDiv.appendChild(companyNameP)
    companyInfoDiv.appendChild(addressP)
    companyInfoDiv.appendChild(contactEmailP)

    let socialMediaDiv = document.createElement('div')
    socialMediaDiv.classList.add('social-media')

    for (let platform in footerData.socialMedia) {
      let socialMediaLink = document.createElement('a')
      socialMediaLink.href = footerData.socialMedia[platform]
      socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)

      socialMediaDiv.appendChild(socialMediaLink)
    }

    footer.appendChild(companyInfoDiv)
    footer.appendChild(socialMediaDiv)

    let currentYear = new Date().getFullYear()
    let copyright = document.createElement('div')
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`
    footer.appendChild(copyright)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  // ❗ DOM creation using your `buildFooter` component (do not change):
  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(p => p.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
