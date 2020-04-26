Vue.component('testimonial-tile', {
  props: ['testimonial'],
  template: `
<div class = "testimonial-tile">
    <p class = "testimonial-text">"{{ testimonial.text }}”</p>
    <p class = "testimonial-name">- {{ testimonial.name }}</p>
    <p class = "testimonial-place">{{ testimonial.place }}</p>
</div>
`})

let app = new Vue({
    el: "#testimonials",
    data()
    {
      return {
        testimonials: [
          {
            text: `If you are looking for a smart, experienced family law attorney, I highly 
            recommend Julie.  She helped me get through a very difficult time in my life.`,
            name: `Richard J.`,
            place: `Encinitas`
          },
          {
            text: `I interviewed four other attorneys before hiring Attorney Brown and I could 
            not be happier with her legal expertise.`,
            name: `Jill G.`,
            place: `San Diego`
          },
          {
            text: `Julie explained the law, kept us informed and advised us on the realistic 
            expectations in our matter. She is a true professional.`,
            name: `Robert T.`,
            place: `El Cajon`
          },
          {
            text: `Finally an attorney who knows the art of negotiating.  The process was efficient and cost effective. 
            I would recommend Ms. Brown any time for her knowledge, patience, honesty and the total commitment she has 
            to her clients.`,
            name: `Tiffany P.`,
            place: `Carlsbad`
          },
        ]
      }
    }
  })