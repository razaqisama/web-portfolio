import FadeInWrapper from "@/components/Animation/FadeIn";
import WorksCard from "./ActivityCard";

function RecentActivity() {
  const activities = [
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Bekerja Di Perusahaan Delos Aqua",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title:
        "Menciptakan Sebuah Pertunjukan Teater Interaktif Bebasis Teknologi",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menerbitkan artikel: Cara Menjadi Orang Sukses Tanpa Usaha",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
    {
      title: "Menyelesaikan Project Game Sederhana: Sudoku",
      linkTo: "http://localhost:3000/blog",
      publishedDate: "27 November 2023",
    },
  ];

  return (
    <div className="flex-1 h-full overflow-y-scroll flex flex-col border border-t-0 pb-2">
      {activities.map((item, index) => {
        const uniqueKey = `${item.title}-${index}`;
        return (
          <FadeInWrapper key={uniqueKey} delay={index * 0.2}>
            <WorksCard
              title={item.title}
              publishedDate={item.publishedDate}
              linkTo={item.linkTo}
            />
          </FadeInWrapper>
        );
      })}
    </div>
  );
}

export default RecentActivity;
