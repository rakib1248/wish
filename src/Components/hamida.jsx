import { useEffect, useState } from "react";
import { speakText } from "../firebase/voice";

const BirthdayCard = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const cards = [
    {
      title: "🎉 Happy Birthday, Hamida! 🎉",
      message:
        "Wishing you a day filled with love, joy, and happiness! May all your dreams come true. 🎂✨",
      voiceMessage:
        "আপনার দিনটি ভালোবাসা, আনন্দ এবং সুখে পূর্ণ হোক! আপনার সব স্বপ্ন বাস্তব হোক। 🎂✨",
      image: "../../img/img1.webp",
      footer: "With friend, Fahim 💖",
    },
    {
      title: "🎉 Cheers to you, Hamida! 🎉",
      message:
        "Hope your day is filled with laughter, good vibes, and unforgettable moments! 🍰🎈",
      voiceMessage:
        "আপনার দিনটি হাসি, ভালোবাসা এবং অমর মুহূর্তে ভরা থাকুক! 🍰🎈",
      image: "../../img/img2.webp",
      footer: "From your friend, Fahim 🎉",
    },
    {
      title: "🎉 Enjoy your day, Hamida! 🎉",
      message:
        "May this day bring joy, love, and all the happiness in the world! 🎁💖",
      voiceMessage: "এই দিনটি আনন্দ, ভালোবাসা এবং পৃথিবীর সব সুখ এনে দিক! 🎁💖",
      image: "../../img/img3.webp",
      footer: "Warm wishes from, Fahim 🎂",
    },
    {
      title: "🌸 A Special Day for Hamida 🌸",
      message:
        "Here’s to celebrating you—may your heart be filled with love and laughter today and always! 🌟🎊",
      voiceMessage:
        "এটি আপনার বিশেষ দিন, আপনার হৃদয় ভালোবাসা এবং হাসিতে পূর্ণ থাকুক! 🌟🎊",
      image: "../../img/img4.webp",
      footer: "Warm wishes from, Fahim 🎂",
    },
  ];
  const changeCard = () => {
    setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(changeCard, 5000); // Change card every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md text-center">
        {/* Add animated emojis above */}
        <div className="flex justify-center space-x-4 mb-4">
          <span className="text-4xl animate-bounce">💖</span>
          <span className="text-4xl animate-bounce">🎉</span>
          <span className="text-4xl animate-bounce">🌸</span>
        </div>

        <h1 className="text-4xl font-bold text-pink-600">
          {cards[cardIndex].title}
          {speakText(cards[cardIndex].title)}
        </h1>
        <p className="mt-4 text-gray-700 text-lg">{cards[cardIndex].message}</p>
        <div className="mt-6">
          <img
            src={cards[cardIndex].image}
            alt="Birthday Celebration"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <p className="mt-6 text-pink-500 font-semibold">
          {cards[cardIndex].footer}
        </p>

        {/* Add the download button */}
        <a
          href={cards[cardIndex].image}
          download
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700">
          Download Image
        </a>

        <button
          onClick={changeCard}
          className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700">
          Next Card
        </button>
      </div>
    </div>
  );
};

export default BirthdayCard;
