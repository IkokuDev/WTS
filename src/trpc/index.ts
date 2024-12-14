import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { QueryValidator } from "../lib/validators/query-validator";
import { getPayloadClient } from "../get-payload";
import { Product } from "../../payload-types";

interface PaginatedResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    page: number;
    hasNextPage: boolean;
    nextPage: number | null;
}

export const appRouter = router({
    auth: authRouter,
    
    getInfiniteProducts: publicProcedure
        .input(
            z.object({
                limit: z.number().min(1).max(100),
                cursor: z.number().nullish(),
                query: QueryValidator,
            })
        )
        .query(async ({ input }) => {
            const { query, cursor } = input;
            const { sort, limit, ...queryOpts } = query;

            const payload = await getPayloadClient();

            const parsedQueryOpts: Record<string, { equals: string }> = {};

            Object.entries(queryOpts).forEach(([key, value]) => {
                parsedQueryOpts[key] = {
                    equals: value,
                }
            });

            const page = cursor || 1;

            const response = await payload.find({
                collection: "products",
                where: {
                    status: {
                        equals: 'active',
                    },
                    ...parsedQueryOpts,
                },
                sort: sort === "desc" ? "-createdAt" : "createdAt",
                depth: 1,
                limit,
                page,
            });

            // Map the response to ensure it matches the Product type
            const items = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    name: doc.name,
                    description: doc.description,
                    price: doc.price,
                    vendor: doc.vendor,
                    category: doc.category,
                    images: doc.images,
                    priceUnit: doc.priceUnit,
                    inventory: doc.inventory,
                } as Product;
            });

            return {
                items,
                nextPage: response.hasNextPage ? response.nextPage : null,
            }
        }),
});

export type AppRouter = typeof appRouter;