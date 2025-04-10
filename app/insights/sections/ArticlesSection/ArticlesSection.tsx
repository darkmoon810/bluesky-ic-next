import { ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";
import { Button } from "../../../../components/ui/button";

export function ArticlesSection() {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      image: "/image-3-1.png",
      title:
        "Why a Balanced Portfolio Strategy in the current economic environment is no longer appropriate?",
      content:
        "In the past a balanced portfolio typically meant to have roughly half of your holdings to be equity (stocks) and the other half to be fixed income (bonds). Some people use a 60/40 weighting, respectively.",
      link: "https://blueskyic.com/why-a-balanced-portfolio-strategy-in-the-current-economic-environment-is-no-longer-appropriate/",
      isExternal: true,
    },
    {
      id: 2,
      image: "/image-4-1.png",
      title:
        "Efficient investing for employees of the big four accounting firms",
      content:
        "Managing the accounting firm independence constraints: All the large accounting firms have stringent procedures when it comes to investing. This is mostly due tovarious scandals that happened in the past where audit clients' information",
      link: "https://blueskyic.com/efficient-investing-for-employees-of-the-big-four-accounting-firms/",
      isExternal: false,
    },
    {
      id: 3,
      image: "/image-8.png",
      title:
        "Learn how your multiple structures of savings accounts really work",
      content:
        "The government has created multiple structures to help Canadians save efficiently and have a retirement that relies less on full government programs such as the CPP",
      link: "https://blueskyic.com/how-your-savings-accounts-really-work/",
      isExternal: false,
    },
    {
      id: 4,
      image: "/image-4-1.png",
      title:
        "Efficient investing for employees of the big four accounting firms",
      content:
        "Managing the accounting firm independence constraints: All the large accounting firms have stringent procedures when it comes to investing. This is mostly due tovarious scandals that happened in the past where audit clients' information",
      link: "https://blueskyic.com/efficient-investing-for-employees-of-the-big-four-accounting-firms/",
      isExternal: false,
    },
    {
      id: 5,
      image: "/image-8.png",
      title:
        "Learn how your multiple structures of savings accounts really work",
      content:
        "The government has created multiple structures to help Canadians save efficiently and have a retirement that relies less on full government programs such as the CPP",
      link: "https://blueskyic.com/how-your-savings-accounts-really-work/",
      isExternal: false,
    },
    {
      id: 6,
      image: "/image-3-1.png",
      title:
        "Why a Balanced Portfolio Strategy in the current economic environment is no longer appropriate?",
      content:
        "In the past a balanced portfolio typically meant to have roughly half of your holdings to be equity (stocks) and the other half to be fixed income (bonds). Some people use a 60/40 weighting, respectively.",
      link: "https://blueskyic.com/why-a-balanced-portfolio-strategy-in-the-current-economic-environment-is-no-longer-appropriate/",
      isExternal: true,
    },
  ];

  // Pagination data
  const paginationItems = [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: "...", active: false },
    { page: 8, active: false },
    { page: 9, active: false },
    { page: 10, active: false },
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-16 px-4 sm:px-0 py-12 sm:py-20 relative self-stretch w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 sm:gap-12 px-4 sm:px-8 py-0 relative w-full">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col w-full items-start gap-5 border-none shadow-none"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  alt="Blog post image"
                  src={post.image}
                />
              </div>

              {/* Content */}
              <CardContent className="flex flex-col items-start gap-6 p-0">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  {post.isExternal ? (
                    <a
                      className="self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-xl sm:text-2xl hover:text-[#00359e] transition-colors"
                      href={post.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {post.title}
                    </a>
                  ) : (
                    <h2 className="self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-xl sm:text-2xl">
                      {post.title}
                    </h2>
                  )}
                  <p className="self-stretch text-sm sm:text-base text-[#475467] line-clamp-3">
                    {post.content}
                  </p>
                </div>

                <Button
                  variant="link"
                  onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
                  className="p-0 h-auto flex items-center gap-2 text-[#00359e] font-semibold hover:text-[#002a7a] transition-colors"
                >
                  Read more
                  <ArrowUpRightIcon className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-5 pt-5 pb-0 px-0 relative self-stretch w-full border-t border-[#eaecf0]">
          <Pagination>
            <PaginationContent className="flex items-center justify-between w-full gap-4">
              {/* Previous Button */}
              <div className="hidden sm:flex h-5 items-center relative">
                <Button
                  variant="ghost"
                  className="p-0 h-5 text-[#475467] font-text-sm-semibold"
                >
                  Previous
                </Button>
              </div>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {paginationItems.map((item, index) => (
                  <PaginationItem key={index}>
                    {item.page === "..." ? (
                      <PaginationEllipsis className="hidden sm:inline-block" />
                    ) : (
                      <PaginationLink
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base
                            ${item.active ? "bg-gray-50" : ""}`}
                        isActive={item.active}
                      >
                        {item.page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
              </div>

              {/* Next Button */}
              <div className="hidden sm:flex h-5 items-center relative">
                <Button
                  variant="ghost"
                  className="p-0 h-5 text-[#475467] font-text-sm-semibold"
                >
                  Next
                </Button>
              </div>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};
