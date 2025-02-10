import Image from "next/image";
import { useRouter } from "next/navigation";
interface Props {
  title: string;
  link: string;
  img: string;
  description: string;
  id: number;
}

function ProjectCard({ title, link, img, description, id }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/${id}`);
      }}
      className="cursor-pointer !w-full h-80 border-[1px] !border-none overflow-hidden relative rounded-lg group"
    >
      <img
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        src={img}
        alt={title}
      />
      <div className="absolute bottom-0 w-full bg-slate-900 text-white p-4 ">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">{title}</h3>
          {/* <span className="font-medium underline cursor-pointer">sijum.id</span> */}
        </div>
        <p className="text-sm mb-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
