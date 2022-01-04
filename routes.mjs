import express from "express";
import { Utilizator, Echipa, Proiect, Bug, Mp, Tst } from "./tabels.mjs";
import {
  getRecords,
  postRecord,
  deleteRecords,
  getRecord,
  headRecord,
  putRecord,
  patchRecord,
  deleteRecord,
  getRecordsJoinModel,
  headUniqueRecord,
} from "./functions.mjs";

const router = express.Router();

router
  .route("/utilizatori")
  .get(async (request, response) => getRecords(Utilizator, request, response))
  .post(async (request, response) => postRecord(Utilizator, request, response))
  .head(async (request, response) =>
    headUniqueRecord(Utilizator, request, response)
  )
  .delete(async (request, response) =>
    deleteRecords(Utilizator, request, response)
  );
router
  .route("/utilizatori/echipe")
  .get(async (request, response) =>
    getRecordsJoinModel(Utilizator, Echipa, request, response)
  );

router
  .route("/utilizatori/:id")
  .get(async (request, response) => getRecord(Utilizator, request, response))
  .head(async (request, response) => headRecord(Utilizator, request, response))
  .put(async (request, response) => putRecord(Utilizator, request, response))
  .patch(async (request, response) =>
    patchRecord(Utilizator, request, response)
  )
  .delete(async (request, response) =>
    deleteRecord(Utilizator, request, response)
  );

// router
//   .route("/utilizatori/echipe/:id")
//   .get(async (request, response) => getRecords(Utilizator, request, response));

router
  .route("/echipe")
  .get(async (request, response) => getRecords(Echipa, request, response))
  .post(async (request, response) => postRecord(Echipa, request, response))
  .delete(async (request, response) =>
    deleteRecords(Echipa, request, response)
  );

router
  .route("/echipe/:id")
  .get(async (request, response) => getRecord(Echipa, request, response))
  .head(async (request, response) => headRecord(Echipa, request, response))
  .put(async (request, response) => putRecord(Echipa, request, response))
  .patch(async (request, response) => patchRecord(Echipa, request, response))
  .delete(async (request, response) => deleteRecord(Echipa, request, response));

router
  .route("/proiecte")
  .get(async (request, response) => getRecords(Proiect, request, response))
  .post(async (request, response) => postRecord(Proiect, request, response))
  .delete(async (request, response) =>
    deleteRecords(Proiect, request, response)
  );

router
  .route("/proiecte/:id")
  .get(async (request, response) => getRecord(Proiect, request, response))
  .head(async (request, response) => headRecord(Proiect, request, response))
  .put(async (request, response) => putRecord(Proiect, request, response))
  .patch(async (request, response) => patchRecord(Proiect, request, response))
  .delete(async (request, response) =>
    deleteRecord(Proiect, request, response)
  );

router
  .route("/bugs")
  .get(async (request, response) => getRecords(Bug, request, response))
  .post(async (request, response) => postRecord(Bug, request, response))
  .delete(async (request, response) => deleteRecords(Bug, request, response));

router
  .route("/bugs/:id")
  .get(async (request, response) => getRecord(Bug, request, response))
  .head(async (request, response) => headRecord(Bug, request, response))
  .put(async (request, response) => putRecord(Bug, request, response))
  .patch(async (request, response) => patchRecord(Bug, request, response))
  .delete(async (request, response) => deleteRecord(Bug, request, response));

router
  .route("/mps")
  .get(async (request, response) => getRecords(Mp, request, response))
  .post(async (request, response) => postRecord(Mp, request, response))
  .delete(async (request, response) => deleteRecords(Mp, request, response));

router
  .route("/mps/:id")
  .get(async (request, response) => getRecord(Mp, request, response))
  .head(async (request, response) => headRecord(Mp, request, response))
  .put(async (request, response) => putRecord(Mp, request, response))
  .patch(async (request, response) => patchRecord(Mp, request, response))
  .delete(async (request, response) => deleteRecord(Mp, request, response));

router
  .route("/tsts")
  .get(async (request, response) => getRecords(Tst, request, response))
  .post(async (request, response) => postRecord(Tst, request, response))
  .delete(async (request, response) => deleteRecords(Tst, request, response));

router
  .route("/tsts/:id")
  .get(async (request, response) => getRecord(Tst, request, response))
  .head(async (request, response) => headRecord(Tst, request, response))
  .put(async (request, response) => putRecord(Tst, request, response))
  .patch(async (request, response) => patchRecord(Tst, request, response))
  .delete(async (request, response) => deleteRecord(Tst, request, response));

export default router;
