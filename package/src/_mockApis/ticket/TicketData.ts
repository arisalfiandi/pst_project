import mock from "../mock";
import user1 from "@/assets/images/profile/user-1.jpg";
import user2 from "@/assets/images/profile/user-2.jpg";
import user3 from "@/assets/images/profile/user-3.jpg";
import user4 from "@/assets/images/profile/user-4.jpg";
import user5 from "@/assets/images/profile/user-5.jpg";
import { Chance } from "chance";
import { TicketType } from "@/types/apps/ticket";

const chance = new Chance();

const TicketData: TicketType[] = [
  {
    Id: 1,
    nama: "Sed ut perspiciatis unde omnis iste",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "error",
    thumb: user1,
    asal: "Liam",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 2,
    nama: "Consequuntur magni dolores eos qui ratione",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Pending",
    Label: "warning",
    thumb: user2,
    asal: "Steve",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 3,
    nama: "Exercitationem ullam corporis",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "success",
    thumb: user3,
    asal: "Jack",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 4,
    nama: "Sed ut perspiciatis unde omnis iste",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "error",
    thumb: user4,
    asal: "Steve",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 5,
    nama: "Exercitationem ullam corporis",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "error",
    thumb: user5,
    asal: "Liam",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 6,
    nama: "Consequuntur magni dolores eos qui ratione",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Pending",
    Label: "warning",
    thumb: user1,
    asal: "Jack",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 7,
    nama: "Sed ut perspiciatis unde omnis iste",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "success",
    thumb: user2,
    asal: "Steve",
    waktu: chance.date(),
    deleted: false,
  },
  {
    Id: 8,
    nama: "Consequuntur magni dolores eos qui ratione",
    ticketDescription:
      "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    status: "Open",
    Label: "error",
    thumb: user3,
    asal: "John",
    waktu: chance.date(),
    deleted: false,
  },
];

mock.onGet("/api/data/ticket/TicketData").reply(() => {
  return [200, TicketData];
});
export default TicketData;
