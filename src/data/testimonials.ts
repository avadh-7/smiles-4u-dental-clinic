export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "Rushikesh Bhambid",
    rating: 5,
    text: "I had broken front tooth and got it corrected aesthetically by Dr. Millin D. Desai. I'm very happy with the result and can't make out where the filling is done. Thanks to Dr. Millin D. Desai and his team, got my smile back",
    source: "Google Review"
  },
  {
    id: "review-2",
    name: "Harshal Shah",
    rating: 5,
    text: "Broke my front tooth once as an accident and Dr. Millin D. Desai fixed it in no time and his work is so good that now I can't even tell which of the teeth it was. Looks completely natural and feels that way too. Very happy and satisfied",
    source: "Google Review"
  },
  {
    id: "review-3",
    name: "Niti Thakkar",
    rating: 5,
    text: "He is the best Implant dentist in Kandivali! Very knowledgeable doctor who will surely treat your dental problems a 100%. He does amazing implants and rehabilitation procedures as well. Also, my parents have been coming to him since more than 15 years! When in doubt, go to Dr. Millin D. Desai.",
    source: "Google Review"
  },
  {
    id: "review-4",
    name: "Dishali Patel",
    rating: 5,
    role: "Dentist",
    text: "Being a dentist myself, i know intricacies of all the procedures. I clearly had over confidence that nothing can happen to my teeth, but we can never gauge cavities between 2 teeth. Luckily, because of my wisdom tooth, cavities in front teeth also got diagnosed, otherwise in 2 months it could have landed in root canal treatment. Dr. Millin D. Desai managed my wisdom tooth removal as well as cavities so well that I didn't even realize that treatment was over. Great work Dr. Millin D. Desai, wish you a lot of success!!",
    source: "Google Review"
  },
  {
    id: "review-5",
    name: "Suraj Sant",
    rating: 5,
    text: "Very nice and helpful...must visit for any dental issues.",
    source: "Google Review"
  }
];
