import React from "react";
import articleImg from "../assets/article1.jpg";

const Article = () => {
  return (
    <section className="px-6 md:px-14 mx-auto">
      <section className="container  ">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              24 hours in Manipur: From gun snatching to threat calls to a
              sleepless night
            </h2>
            <p>
              With multiple calls from various Meitei people, as well as someone
              claiming to be a senior official, indirectly warned about facing
              consequences for filing a report on a gunfight between 37 Assam
              Rifles and Arambai militants.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div class="container px-5 mb-4  mx-auto flex flex-wrap">
          <img alt="gallery" class="mx-auto" width={780} src={articleImg} />
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <p className="text-justify pb-5">
          It all started on May 3 when the Northeast woke up with a sense of
          discomfort as the Meitei and Kuki communities were caught in the grip
          of ethnic disagreement. It opened a can of worms until the internet
          had to be snapped and ‘shoot at sight’ ordered by the government.{" "}
          <br />
          After covering the first incident of violence from ground zero on May
          3, things were returning to normal in the subsequent days, with a few
          minor incidents in the periphery areas. On May 28, my office assigned
          me to go to Imphal again because violence had erupted in the Kakching
          area and other parts of the state ahead of home minister Amit Shah’s
          visit. <br />
          On May 29, I set out for violence-ravaged Manipur. I took the first
          flight and arrived around 8:30 am. Upon landing, I had a distinct
          feeling that this was not the same Manipur I had left just 15 days
          ago. I took a cab to my hotel, ‘Hotel Imphal’. Around 9:15 am, right
          in front of the hotel, I saw a few young protesters attempting to
          snatch weapons from a Manipur Rifles truck. That’s how began my day,
          or rather my breakfast with ‘arms and ammo’, in Imphal. <br />
          The scene was nothing short of a movie set. It was a state of complete
          lawlessness. When I went to Sugnu, I saw civilians carrying arms and
          landmines in a location where alleged Kuki militants were taking
          refuge. The civilians were carrying guns for self-defence. I covered
          the scene and headed for Sugnu Bazaar and Serou. When I arrived at
          Sugnu Bazaar, I saw people being rescued to safer locations. I headed
          for Serou, where houses had been gutted and the situation was tense,
          with the likelihood of untoward incidents anytime. When I returned to
          Sugnu, the situation was very different, with civilian youth, dressed
          in black and mostly wearing black masks. Manipur police commandos were
          also present. The youth were breaking into houses. No one allowed me
          to take photos and I was warned to leave immediately. I figured out
          they were Arambai youth. <br />
          With so much to report and the internet down, I returned to Imphal and
          went to DIPR, where the internet was available for journalists to file
          reports. While working on a news report, I received a call from a
          reliable source about a gunfight between the 37 Assam Rifles and
          Arambai militants in Sugnu. I knew I had to report the news from the
          scene. <br />
          I also got visuals of people carrying guns for our channel India Today
          TV’s prime-time bulletin, filed a report on the gunfight for India
          Today NE, and left DIPR for my hotel. Everything was fine until 9:30
          pm, when I received multiple calls from various Meitei people as well
          as someone claiming to be a senior official, who indirectly warned me
          about facing consequences. Immediately afterwards, I received a call
          from the hotel reception that a few women had come to meet me and
          enquire why I had done the story. A large gathering was outside. When
          I realised something was wrong, I immediately briefed my superiors
          about the situation. My colleagues and well-wishers went all out to
          ensure my safety and extended all possible assistance. My seniors
          informed me, somewhat anxiously, that they had contacted the higher
          authorities about my security, but the situation remained tense until
          1 am when police were finally able to disperse the mob from the hotel.
          Numerous threatening phone calls came and the hotel management had to
          change my room. <br />
          also contacted the Assam Rifles IG, requesting assistance, since the
          language problem made it difficult to understand what the mob wanted
          or to address their issues. The situation could have worsened.
          Thankfully, I received an excellent response. Around 3 am, a team led
          by Colonel Sandeep Mishra, commanding officer of 4 Assam Rifles based
          at Mantripukhuri, evacuated me from the hotel and arranged for my stay
          at a safer location until I reached the airport. <br />
          Those threatening phone calls, however, continue to haunt me, raising
          several questions in my mind. Aren’t we supposed to bring out the
          truth? No one questioned me when I went to Manipur on May 5 and
          covered Kuki milltants. But one thing against the majority community
          got me into trouble. As casualties in the Manipur ethnic clashes
          continue to mount, reporters on the ground have to walk a tightrope
          between getting the story and potentially getting killed. So, if we
          have to withdraw our coverage for some time, it does not mean we are
          scared.
        </p>
        <p className="pb-10 italic text-center">
          {" "}
          ~ Afrida Hussain, May 31, 2023 || 6:00 PM IST
        </p>
      </section>
    </section>
  );
};

export default Article;
