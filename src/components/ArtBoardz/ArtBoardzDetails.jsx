import { DetailsCard } from "../New Release/DetailsCard";
import NewReleaseImage from "../New Release/NewReleaseImage";
import NewReleaseInfo from "../New Release/NewReleaseInfo";

const ArtBoardzDetails = ({
  image,
  art,
  location,
  artist,
  links,
  artDesc,
  moreInfo,
}) => {
  return (
    <section className="p-4 text-white font-Montserrat">
      <div className="py-6">
        <NewReleaseImage image={image} />
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-2 my-4 items-center justify-center text-base tracking-wide">
            <div className=" p-2 border rounded-lg border-light-purple text-center">
              <p>Floor</p>
              <p className="font-semibold">100</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center">
              <p>Listings</p>
              <p className="font-semibold">5/40</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center">
              <p>Royalty</p>
              <p className="font-semibold">5%</p>
            </div>
          </div>
          <button className="bg-active-link rounded-md p-2 font-semibold w-full sm:w-1/3 mx-auto block tracking-wide text-base my-4">
            Jpgstore
          </button>
        </div>
      </div>

      <div className="py-6">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
          artDesc={artDesc}
        />
      </div>
      {moreInfo.map((info, index) => {
        return (
          <div className="py-6">
            <DetailsCard
              key={index}
              image={info.image}
              title={info.title}
              desc={info.desc}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ArtBoardzDetails;
