"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/prisma-adapter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@auth/prisma-adapter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaAdapter: () => (/* binding */ PrismaAdapter)\n/* harmony export */ });\n/**\n * ## Setup\n *\n * Add this adapter to your `auth.ts` Auth.js configuration object:\n *\n * ```js title=\"auth.ts\"\n * import NextAuth from \"next-auth\"\n * import Google from \"next-auth/providers/google\"\n * import { PrismaAdapter } from \"@auth/prisma-adapter\"\n * import { PrismaClient } from \"@prisma/client\"\n *\n * const prisma = new PrismaClient()\n *\n * export { handlers, auth, signIn, signOut } = NextAuth({\n *   adapter: PrismaAdapter(prisma),\n *   providers: [\n *     Google,\n *   ],\n * })\n * ```\n *\n * ### Create the Prisma schema from scratch\n *\n * You need to use at least Prisma 2.26.0. Create a schema file in `prisma/schema.prisma` similar to this one:\n *\n * > This schema is adapted for use in Prisma and based upon our main [schema](https://authjs.dev/reference/core/adapters#models)\n *\n * ```json title=\"schema.prisma\"\n * datasource db {\n *   provider = \"postgresql\"\n *   url      = env(\"DATABASE_URL\")\n *   shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\") // Only needed when using a cloud provider that doesn't support the creation of new databases, like Heroku. Learn more: https://pris.ly/d/migrate-shadow\n * }\n *\n * generator client {\n *   provider        = \"prisma-client-js\"\n *   previewFeatures = [\"referentialActions\"] // You won't need this in Prisma 3.X or higher.\n * }\n *\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String\n *   type               String\n *   provider           String\n *   providerAccountId  String\n *   refresh_token      String?  @db.Text\n *   access_token       String?  @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String?  @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique\n *   userId       String\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime?\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n * }\n * ```\n *\n * :::note\n * When using the MySQL connector for Prisma, the [Prisma `String` type](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string) gets mapped to `varchar(191)` which may not be long enough to store fields such as `id_token` in the `Account` model. This can be avoided by explicitly using the `Text` type with `@db.Text`.\n * :::\n *\n *\n * ### Create the Prisma schema with `prisma migrate`\n *\n * This will create an SQL migration file and execute it:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.\n *\n * To learn more about [Prisma Migrate](https://www.prisma.io/migrate), check out the [Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate).\n *\n * ### Generating the Prisma Client\n *\n * Once you have saved your schema, use the Prisma CLI to generate the Prisma Client:\n *\n * ```\n * npx prisma generate\n * ```\n *\n * To configure your database to use the new schema (i.e. create tables and columns) use the `prisma migrate` command:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * ### MongoDB support\n *\n * Prisma supports MongoDB, and so does Auth.js. Following the instructions of the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb) on the MongoDB connector, things you have to change are:\n *\n * 1. Make sure that the id fields are mapped correctly\n *\n * ```prisma\n * id  String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n * ```\n *\n * 2. The Native database type attribute to `@db.String` from `@db.Text` and userId to `@db.ObjectId`.\n *\n * ```prisma\n * user_id            String   @db.ObjectId\n * refresh_token      String?  @db.String\n * access_token       String?  @db.String\n * id_token           String?  @db.String\n * ```\n *\n * Everything else should be the same.\n *\n * ### Naming Conventions\n *\n * If mixed snake_case and camelCase column names is an issue for you and/or your underlying database system, we recommend using Prisma's `@map()`([see the documentation here](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database)) feature to change the field names. This won't affect Auth.js, but will allow you to customize the column names to whichever naming convention you wish.\n *\n * For example, moving to `snake_case` and plural table names.\n *\n * ```json title=\"schema.prisma\"\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String  @map(\"user_id\")\n *   type               String\n *   provider           String\n *   providerAccountId  String  @map(\"provider_account_id\")\n *   refresh_token      String? @db.Text\n *   access_token       String? @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String? @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n *   @@map(\"accounts\")\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique @map(\"session_token\")\n *   userId       String   @map(\"user_id\")\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@map(\"sessions\")\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime? @map(\"email_verified\")\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n *\n *   @@map(\"users\")\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n *   @@map(\"verificationtokens\")\n * }\n *\n * model Authenticator {\n *   id                   String  @id @default(cuid())\n *   credentialID         String  @unique\n *   userId               String\n *   providerAccountId    String\n *   credentialPublicKey  String\n *   counter              Int\n *   credentialDeviceType String\n *   credentialBackedUp   Boolean\n *   transports           String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n * ```\n *\n **/ function PrismaAdapter(prisma) {\n    const p = prisma;\n    return {\n        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB\n        createUser: ({ id: _id, ...data })=>{\n            return p.user.create({\n                data\n            });\n        },\n        getUser: (id)=>p.user.findUnique({\n                where: {\n                    id\n                }\n            }),\n        getUserByEmail: (email)=>p.user.findUnique({\n                where: {\n                    email\n                }\n            }),\n        async getUserByAccount (provider_providerAccountId) {\n            const account = await p.account.findUnique({\n                where: {\n                    provider_providerAccountId\n                },\n                select: {\n                    user: true\n                }\n            });\n            return account?.user ?? null;\n        },\n        updateUser: ({ id, ...data })=>p.user.update({\n                where: {\n                    id\n                },\n                data\n            }),\n        deleteUser: (id)=>p.user.delete({\n                where: {\n                    id\n                }\n            }),\n        linkAccount: (data)=>p.account.create({\n                data\n            }),\n        unlinkAccount: (provider_providerAccountId)=>p.account.delete({\n                where: {\n                    provider_providerAccountId\n                }\n            }),\n        async getSessionAndUser (sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: {\n                    sessionToken\n                },\n                include: {\n                    user: true\n                }\n            });\n            if (!userAndSession) return null;\n            const { user, ...session } = userAndSession;\n            return {\n                user,\n                session\n            };\n        },\n        createSession: (data)=>p.session.create({\n                data\n            }),\n        updateSession: (data)=>p.session.update({\n                where: {\n                    sessionToken: data.sessionToken\n                },\n                data\n            }),\n        deleteSession: (sessionToken)=>p.session.delete({\n                where: {\n                    sessionToken\n                }\n            }),\n        async createVerificationToken (data) {\n            const verificationToken = await p.verificationToken.create({\n                data\n            });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id) delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken (identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: {\n                        identifier_token\n                    }\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id) delete verificationToken.id;\n                return verificationToken;\n            } catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\") return null;\n                throw error;\n            }\n        },\n        async getAccount (providerAccountId, provider) {\n            return p.account.findFirst({\n                where: {\n                    providerAccountId,\n                    provider\n                }\n            });\n        },\n        async createAuthenticator (authenticator) {\n            return p.authenticator.create({\n                data: authenticator\n            }).then(fromDBAuthenticator);\n        },\n        async getAuthenticator (credentialID) {\n            const authenticator = await p.authenticator.findUnique({\n                where: {\n                    credentialID\n                }\n            });\n            return authenticator ? fromDBAuthenticator(authenticator) : null;\n        },\n        async listAuthenticatorsByUserId (userId) {\n            const authenticators = await p.authenticator.findMany({\n                where: {\n                    userId\n                }\n            });\n            return authenticators.map(fromDBAuthenticator);\n        },\n        async updateAuthenticatorCounter (credentialID, counter) {\n            return p.authenticator.update({\n                where: {\n                    credentialID: credentialID\n                },\n                data: {\n                    counter\n                }\n            }).then(fromDBAuthenticator);\n        }\n    };\n}\nfunction fromDBAuthenticator(authenticator) {\n    const { transports, id, user, ...other } = authenticator;\n    return {\n        ...other,\n        transports: transports || undefined\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvcHJpc21hLWFkYXB0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrTkUsR0FDSyxTQUFTQSxjQUFjQyxNQUFNO0lBQ2hDLE1BQU1DLElBQUlEO0lBQ1YsT0FBTztRQUNILDhGQUE4RjtRQUM5RkUsWUFBWSxDQUFDLEVBQUVDLElBQUlDLEdBQUcsRUFBRSxHQUFHQyxNQUFNO1lBQzdCLE9BQU9KLEVBQUVLLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2dCQUFFRjtZQUFLO1FBQ2hDO1FBQ0FHLFNBQVMsQ0FBQ0wsS0FBT0YsRUFBRUssSUFBSSxDQUFDRyxVQUFVLENBQUM7Z0JBQUVDLE9BQU87b0JBQUVQO2dCQUFHO1lBQUU7UUFDbkRRLGdCQUFnQixDQUFDQyxRQUFVWCxFQUFFSyxJQUFJLENBQUNHLFVBQVUsQ0FBQztnQkFBRUMsT0FBTztvQkFBRUU7Z0JBQU07WUFBRTtRQUNoRSxNQUFNQyxrQkFBaUJDLDBCQUEwQjtZQUM3QyxNQUFNQyxVQUFVLE1BQU1kLEVBQUVjLE9BQU8sQ0FBQ04sVUFBVSxDQUFDO2dCQUN2Q0MsT0FBTztvQkFBRUk7Z0JBQTJCO2dCQUNwQ0UsUUFBUTtvQkFBRVYsTUFBTTtnQkFBSztZQUN6QjtZQUNBLE9BQU9TLFNBQVNULFFBQVE7UUFDNUI7UUFDQVcsWUFBWSxDQUFDLEVBQUVkLEVBQUUsRUFBRSxHQUFHRSxNQUFNLEdBQUtKLEVBQUVLLElBQUksQ0FBQ1ksTUFBTSxDQUFDO2dCQUFFUixPQUFPO29C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UUFDQSxNQUFNUSw0QkFBMkJOLFlBQVksRUFBRU8sT0FBTztZQUNsRCxPQUFPcEQsRUFBRXlDLGFBQWEsQ0FDakJ4QixNQUFNLENBQUM7Z0JBQ1JSLE9BQU87b0JBQUVvQyxjQUFjQTtnQkFBYTtnQkFDcEN6QyxNQUFNO29CQUFFZ0Q7Z0JBQVE7WUFDcEIsR0FDS1YsSUFBSSxDQUFDQztRQUNkO0lBQ0o7QUFDSjtBQUNBLFNBQVNBLG9CQUFvQkYsYUFBYTtJQUN0QyxNQUFNLEVBQUVZLFVBQVUsRUFBRW5ELEVBQUUsRUFBRUcsSUFBSSxFQUFFLEdBQUdpRCxPQUFPLEdBQUdiO0lBQzNDLE9BQU87UUFDSCxHQUFHYSxLQUFLO1FBQ1JELFlBQVlBLGNBQWNFO0lBQzlCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZDIvLi9ub2RlX21vZHVsZXMvQGF1dGgvcHJpc21hLWFkYXB0ZXIvaW5kZXguanM/NTgxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICMjIFNldHVwXG4gKlxuICogQWRkIHRoaXMgYWRhcHRlciB0byB5b3VyIGBhdXRoLnRzYCBBdXRoLmpzIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICpcbiAqIGBgYGpzIHRpdGxlPVwiYXV0aC50c1wiXG4gKiBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4gKiBpbXBvcnQgR29vZ2xlIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG4gKiBpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbiAqIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG4gKlxuICogY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gKlxuICogZXhwb3J0IHsgaGFuZGxlcnMsIGF1dGgsIHNpZ25Jbiwgc2lnbk91dCB9ID0gTmV4dEF1dGgoe1xuICogICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIEdvb2dsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiAjIyMgQ3JlYXRlIHRoZSBQcmlzbWEgc2NoZW1hIGZyb20gc2NyYXRjaFxuICpcbiAqIFlvdSBuZWVkIHRvIHVzZSBhdCBsZWFzdCBQcmlzbWEgMi4yNi4wLiBDcmVhdGUgYSBzY2hlbWEgZmlsZSBpbiBgcHJpc21hL3NjaGVtYS5wcmlzbWFgIHNpbWlsYXIgdG8gdGhpcyBvbmU6XG4gKlxuICogPiBUaGlzIHNjaGVtYSBpcyBhZGFwdGVkIGZvciB1c2UgaW4gUHJpc21hIGFuZCBiYXNlZCB1cG9uIG91ciBtYWluIFtzY2hlbWFdKGh0dHBzOi8vYXV0aGpzLmRldi9yZWZlcmVuY2UvY29yZS9hZGFwdGVycyNtb2RlbHMpXG4gKlxuICogYGBganNvbiB0aXRsZT1cInNjaGVtYS5wcmlzbWFcIlxuICogZGF0YXNvdXJjZSBkYiB7XG4gKiAgIHByb3ZpZGVyID0gXCJwb3N0Z3Jlc3FsXCJcbiAqICAgdXJsICAgICAgPSBlbnYoXCJEQVRBQkFTRV9VUkxcIilcbiAqICAgc2hhZG93RGF0YWJhc2VVcmwgPSBlbnYoXCJTSEFET1dfREFUQUJBU0VfVVJMXCIpIC8vIE9ubHkgbmVlZGVkIHdoZW4gdXNpbmcgYSBjbG91ZCBwcm92aWRlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCB0aGUgY3JlYXRpb24gb2YgbmV3IGRhdGFiYXNlcywgbGlrZSBIZXJva3UuIExlYXJuIG1vcmU6IGh0dHBzOi8vcHJpcy5seS9kL21pZ3JhdGUtc2hhZG93XG4gKiB9XG4gKlxuICogZ2VuZXJhdG9yIGNsaWVudCB7XG4gKiAgIHByb3ZpZGVyICAgICAgICA9IFwicHJpc21hLWNsaWVudC1qc1wiXG4gKiAgIHByZXZpZXdGZWF0dXJlcyA9IFtcInJlZmVyZW50aWFsQWN0aW9uc1wiXSAvLyBZb3Ugd29uJ3QgbmVlZCB0aGlzIGluIFByaXNtYSAzLlggb3IgaGlnaGVyLlxuICogfVxuICpcbiAqIG1vZGVsIEFjY291bnQge1xuICogICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICB1c2VySWQgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHR5cGUgICAgICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXIgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlckFjY291bnRJZCAgU3RyaW5nXG4gKiAgIHJlZnJlc2hfdG9rZW4gICAgICBTdHJpbmc/ICBAZGIuVGV4dFxuICogICBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyAgQGRiLlRleHRcbiAqICAgZXhwaXJlc19hdCAgICAgICAgIEludD9cbiAqICAgdG9rZW5fdHlwZSAgICAgICAgIFN0cmluZz9cbiAqICAgc2NvcGUgICAgICAgICAgICAgIFN0cmluZz9cbiAqICAgaWRfdG9rZW4gICAgICAgICAgIFN0cmluZz8gIEBkYi5UZXh0XG4gKiAgIHNlc3Npb25fc3RhdGUgICAgICBTdHJpbmc/XG4gKlxuICogICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICpcbiAqICAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0pXG4gKiB9XG4gKlxuICogbW9kZWwgU2Vzc2lvbiB7XG4gKiAgIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZVxuICogICB1c2VySWQgICAgICAgU3RyaW5nXG4gKiAgIGV4cGlyZXMgICAgICBEYXRlVGltZVxuICogICB1c2VyICAgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICogfVxuICpcbiAqIG1vZGVsIFVzZXIge1xuICogICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBuYW1lICAgICAgICAgIFN0cmluZz9cbiAqICAgZW1haWwgICAgICAgICBTdHJpbmc/ICAgQHVuaXF1ZVxuICogICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lP1xuICogICBpbWFnZSAgICAgICAgIFN0cmluZz9cbiAqICAgYWNjb3VudHMgICAgICBBY2NvdW50W11cbiAqICAgc2Vzc2lvbnMgICAgICBTZXNzaW9uW11cbiAqIH1cbiAqXG4gKiBtb2RlbCBWZXJpZmljYXRpb25Ub2tlbiB7XG4gKiAgIGlkZW50aWZpZXIgU3RyaW5nXG4gKiAgIHRva2VuICAgICAgU3RyaW5nICAgQHVuaXF1ZVxuICogICBleHBpcmVzICAgIERhdGVUaW1lXG4gKlxuICogICBAQHVuaXF1ZShbaWRlbnRpZmllciwgdG9rZW5dKVxuICogfVxuICogYGBgXG4gKlxuICogOjo6bm90ZVxuICogV2hlbiB1c2luZyB0aGUgTXlTUUwgY29ubmVjdG9yIGZvciBQcmlzbWEsIHRoZSBbUHJpc21hIGBTdHJpbmdgIHR5cGVdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL3JlZmVyZW5jZS9hcGktcmVmZXJlbmNlL3ByaXNtYS1zY2hlbWEtcmVmZXJlbmNlI3N0cmluZykgZ2V0cyBtYXBwZWQgdG8gYHZhcmNoYXIoMTkxKWAgd2hpY2ggbWF5IG5vdCBiZSBsb25nIGVub3VnaCB0byBzdG9yZSBmaWVsZHMgc3VjaCBhcyBgaWRfdG9rZW5gIGluIHRoZSBgQWNjb3VudGAgbW9kZWwuIFRoaXMgY2FuIGJlIGF2b2lkZWQgYnkgZXhwbGljaXRseSB1c2luZyB0aGUgYFRleHRgIHR5cGUgd2l0aCBgQGRiLlRleHRgLlxuICogOjo6XG4gKlxuICpcbiAqICMjIyBDcmVhdGUgdGhlIFByaXNtYSBzY2hlbWEgd2l0aCBgcHJpc21hIG1pZ3JhdGVgXG4gKlxuICogVGhpcyB3aWxsIGNyZWF0ZSBhbiBTUUwgbWlncmF0aW9uIGZpbGUgYW5kIGV4ZWN1dGUgaXQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIG1pZ3JhdGUgZGV2XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgeW91IHdpbGwgbmVlZCB0byBzcGVjaWZ5IHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBzdHJpbmcgaW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBEQVRBQkFTRV9VUkxgLiBZb3UgY2FuIGRvIHRoaXMgYnkgc2V0dGluZyBpdCBpbiBhIGAuZW52YCBmaWxlIGF0IHRoZSByb290IG9mIHlvdXIgcHJvamVjdC5cbiAqXG4gKiBUbyBsZWFybiBtb3JlIGFib3V0IFtQcmlzbWEgTWlncmF0ZV0oaHR0cHM6Ly93d3cucHJpc21hLmlvL21pZ3JhdGUpLCBjaGVjayBvdXQgdGhlIFtNaWdyYXRlIGRvY3NdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLW1pZ3JhdGUpLlxuICpcbiAqICMjIyBHZW5lcmF0aW5nIHRoZSBQcmlzbWEgQ2xpZW50XG4gKlxuICogT25jZSB5b3UgaGF2ZSBzYXZlZCB5b3VyIHNjaGVtYSwgdXNlIHRoZSBQcmlzbWEgQ0xJIHRvIGdlbmVyYXRlIHRoZSBQcmlzbWEgQ2xpZW50OlxuICpcbiAqIGBgYFxuICogbnB4IHByaXNtYSBnZW5lcmF0ZVxuICogYGBgXG4gKlxuICogVG8gY29uZmlndXJlIHlvdXIgZGF0YWJhc2UgdG8gdXNlIHRoZSBuZXcgc2NoZW1hIChpLmUuIGNyZWF0ZSB0YWJsZXMgYW5kIGNvbHVtbnMpIHVzZSB0aGUgYHByaXNtYSBtaWdyYXRlYCBjb21tYW5kOlxuICpcbiAqIGBgYFxuICogbnB4IHByaXNtYSBtaWdyYXRlIGRldlxuICogYGBgXG4gKlxuICogIyMjIE1vbmdvREIgc3VwcG9ydFxuICpcbiAqIFByaXNtYSBzdXBwb3J0cyBNb25nb0RCLCBhbmQgc28gZG9lcyBBdXRoLmpzLiBGb2xsb3dpbmcgdGhlIGluc3RydWN0aW9ucyBvZiB0aGUgW1ByaXNtYSBkb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9kYXRhYmFzZS1jb25uZWN0b3JzL21vbmdvZGIpIG9uIHRoZSBNb25nb0RCIGNvbm5lY3RvciwgdGhpbmdzIHlvdSBoYXZlIHRvIGNoYW5nZSBhcmU6XG4gKlxuICogMS4gTWFrZSBzdXJlIHRoYXQgdGhlIGlkIGZpZWxkcyBhcmUgbWFwcGVkIGNvcnJlY3RseVxuICpcbiAqIGBgYHByaXNtYVxuICogaWQgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcChcIl9pZFwiKSBAZGIuT2JqZWN0SWRcbiAqIGBgYFxuICpcbiAqIDIuIFRoZSBOYXRpdmUgZGF0YWJhc2UgdHlwZSBhdHRyaWJ1dGUgdG8gYEBkYi5TdHJpbmdgIGZyb20gYEBkYi5UZXh0YCBhbmQgdXNlcklkIHRvIGBAZGIuT2JqZWN0SWRgLlxuICpcbiAqIGBgYHByaXNtYVxuICogdXNlcl9pZCAgICAgICAgICAgIFN0cmluZyAgIEBkYi5PYmplY3RJZFxuICogcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gIEBkYi5TdHJpbmdcbiAqIGFjY2Vzc190b2tlbiAgICAgICBTdHJpbmc/ICBAZGIuU3RyaW5nXG4gKiBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyAgQGRiLlN0cmluZ1xuICogYGBgXG4gKlxuICogRXZlcnl0aGluZyBlbHNlIHNob3VsZCBiZSB0aGUgc2FtZS5cbiAqXG4gKiAjIyMgTmFtaW5nIENvbnZlbnRpb25zXG4gKlxuICogSWYgbWl4ZWQgc25ha2VfY2FzZSBhbmQgY2FtZWxDYXNlIGNvbHVtbiBuYW1lcyBpcyBhbiBpc3N1ZSBmb3IgeW91IGFuZC9vciB5b3VyIHVuZGVybHlpbmcgZGF0YWJhc2Ugc3lzdGVtLCB3ZSByZWNvbW1lbmQgdXNpbmcgUHJpc21hJ3MgYEBtYXAoKWAoW3NlZSB0aGUgZG9jdW1lbnRhdGlvbiBoZXJlXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9jb21wb25lbnRzL3ByaXNtYS1zY2hlbWEvbmFtZXMtaW4tdW5kZXJseWluZy1kYXRhYmFzZSkpIGZlYXR1cmUgdG8gY2hhbmdlIHRoZSBmaWVsZCBuYW1lcy4gVGhpcyB3b24ndCBhZmZlY3QgQXV0aC5qcywgYnV0IHdpbGwgYWxsb3cgeW91IHRvIGN1c3RvbWl6ZSB0aGUgY29sdW1uIG5hbWVzIHRvIHdoaWNoZXZlciBuYW1pbmcgY29udmVudGlvbiB5b3Ugd2lzaC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgbW92aW5nIHRvIGBzbmFrZV9jYXNlYCBhbmQgcGx1cmFsIHRhYmxlIG5hbWVzLlxuICpcbiAqIGBgYGpzb24gdGl0bGU9XCJzY2hlbWEucHJpc21hXCJcbiAqIG1vZGVsIEFjY291bnQge1xuICogICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICB1c2VySWQgICAgICAgICAgICAgU3RyaW5nICBAbWFwKFwidXNlcl9pZFwiKVxuICogICB0eXBlICAgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXJBY2NvdW50SWQgIFN0cmluZyAgQG1hcChcInByb3ZpZGVyX2FjY291bnRfaWRcIilcbiAqICAgcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgYWNjZXNzX3Rva2VuICAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgZXhwaXJlc19hdCAgICAgICAgIEludD9cbiAqICAgdG9rZW5fdHlwZSAgICAgICAgIFN0cmluZz9cbiAqICAgc2NvcGUgICAgICAgICAgICAgIFN0cmluZz9cbiAqICAgaWRfdG9rZW4gICAgICAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgc2Vzc2lvbl9zdGF0ZSAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQHVuaXF1ZShbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSlcbiAqICAgQEBtYXAoXCJhY2NvdW50c1wiKVxuICogfVxuICpcbiAqIG1vZGVsIFNlc3Npb24ge1xuICogICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgc2Vzc2lvblRva2VuIFN0cmluZyAgIEB1bmlxdWUgQG1hcChcInNlc3Npb25fdG9rZW5cIilcbiAqICAgdXNlcklkICAgICAgIFN0cmluZyAgIEBtYXAoXCJ1c2VyX2lkXCIpXG4gKiAgIGV4cGlyZXMgICAgICBEYXRlVGltZVxuICogICB1c2VyICAgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICpcbiAqICAgQEBtYXAoXCJzZXNzaW9uc1wiKVxuICogfVxuICpcbiAqIG1vZGVsIFVzZXIge1xuICogICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBuYW1lICAgICAgICAgIFN0cmluZz9cbiAqICAgZW1haWwgICAgICAgICBTdHJpbmc/ICAgQHVuaXF1ZVxuICogICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPyBAbWFwKFwiZW1haWxfdmVyaWZpZWRcIilcbiAqICAgaW1hZ2UgICAgICAgICBTdHJpbmc/XG4gKiAgIGFjY291bnRzICAgICAgQWNjb3VudFtdXG4gKiAgIHNlc3Npb25zICAgICAgU2Vzc2lvbltdXG4gKlxuICogICBAQG1hcChcInVzZXJzXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4ge1xuICogICBpZGVudGlmaWVyIFN0cmluZ1xuICogICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWVcbiAqICAgZXhwaXJlcyAgICBEYXRlVGltZVxuICpcbiAqICAgQEB1bmlxdWUoW2lkZW50aWZpZXIsIHRva2VuXSlcbiAqICAgQEBtYXAoXCJ2ZXJpZmljYXRpb250b2tlbnNcIilcbiAqIH1cbiAqXG4gKiBtb2RlbCBBdXRoZW50aWNhdG9yIHtcbiAqICAgaWQgICAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBjcmVkZW50aWFsSUQgICAgICAgICBTdHJpbmcgIEB1bmlxdWVcbiAqICAgdXNlcklkICAgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyQWNjb3VudElkICAgIFN0cmluZ1xuICogICBjcmVkZW50aWFsUHVibGljS2V5ICBTdHJpbmdcbiAqICAgY291bnRlciAgICAgICAgICAgICAgSW50XG4gKiAgIGNyZWRlbnRpYWxEZXZpY2VUeXBlIFN0cmluZ1xuICogICBjcmVkZW50aWFsQmFja2VkVXAgICBCb29sZWFuXG4gKiAgIHRyYW5zcG9ydHMgICAgICAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gUHJpc21hQWRhcHRlcihwcmlzbWEpIHtcbiAgICBjb25zdCBwID0gcHJpc21hO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbGV0IFByaXNtYSBnZW5lcmF0ZSB0aGUgSUQgYmVjYXVzZSBvdXIgZGVmYXVsdCBVVUlEIGlzIGluY29tcGF0aWJsZSB3aXRoIE1vbmdvREJcbiAgICAgICAgY3JlYXRlVXNlcjogKHsgaWQ6IF9pZCwgLi4uZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcC51c2VyLmNyZWF0ZSh7IGRhdGEgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFVzZXI6IChpZCkgPT4gcC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxuICAgICAgICBnZXRVc2VyQnlFbWFpbDogKGVtYWlsKSA9PiBwLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSksXG4gICAgICAgIGFzeW5jIGdldFVzZXJCeUFjY291bnQocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwLmFjY291bnQuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgdXNlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudD8udXNlciA/PyBudWxsO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVVc2VyOiAoeyBpZCwgLi4uZGF0YSB9KSA9PiBwLnVzZXIudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KSxcbiAgICAgICAgZGVsZXRlVXNlcjogKGlkKSA9PiBwLnVzZXIuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KSxcbiAgICAgICAgbGlua0FjY291bnQ6IChkYXRhKSA9PiBwLmFjY291bnQuY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgdW5saW5rQWNjb3VudDogKHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSA9PiBwLmFjY291bnQuZGVsZXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhc3luYyBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJBbmRTZXNzaW9uID0gYXdhaXQgcC5zZXNzaW9uLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHNlc3Npb25Ub2tlbiB9LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXJBbmRTZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyLCAuLi5zZXNzaW9uIH0gPSB1c2VyQW5kU2Vzc2lvbjtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZXIsIHNlc3Npb24gfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlU2Vzc2lvbjogKGRhdGEpID0+IHAuc2Vzc2lvbi5jcmVhdGUoeyBkYXRhIH0pLFxuICAgICAgICB1cGRhdGVTZXNzaW9uOiAoZGF0YSkgPT4gcC5zZXNzaW9uLnVwZGF0ZSh7IHdoZXJlOiB7IHNlc3Npb25Ub2tlbjogZGF0YS5zZXNzaW9uVG9rZW4gfSwgZGF0YSB9KSxcbiAgICAgICAgZGVsZXRlU2Vzc2lvbjogKHNlc3Npb25Ub2tlbikgPT4gcC5zZXNzaW9uLmRlbGV0ZSh7IHdoZXJlOiB7IHNlc3Npb25Ub2tlbiB9IH0pLFxuICAgICAgICBhc3luYyBjcmVhdGVWZXJpZmljYXRpb25Ub2tlbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGF3YWl0IHAudmVyaWZpY2F0aW9uVG9rZW4uY3JlYXRlKHsgZGF0YSB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JzIC8vIE1vbmdvREIgbmVlZHMgYW4gSUQsIGJ1dCB3ZSBkb24ndFxuICAgICAgICAgICAgaWYgKHZlcmlmaWNhdGlvblRva2VuLmlkKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2ZXJpZmljYXRpb25Ub2tlbi5pZDtcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXNlVmVyaWZpY2F0aW9uVG9rZW4oaWRlbnRpZmllcl90b2tlbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGF3YWl0IHAudmVyaWZpY2F0aW9uVG9rZW4uZGVsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWRlbnRpZmllcl90b2tlbiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JzIC8vIE1vbmdvREIgbmVlZHMgYW4gSUQsIGJ1dCB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIGlmICh2ZXJpZmljYXRpb25Ub2tlbi5pZClcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZlcmlmaWNhdGlvblRva2VuLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRva2VuIGFscmVhZHkgdXNlZC9kZWxldGVkLCBqdXN0IHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvcmVmZXJlbmNlL2FwaS1yZWZlcmVuY2UvZXJyb3ItcmVmZXJlbmNlI3AyMDI1XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFwiUDIwMjVcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldEFjY291bnQocHJvdmlkZXJBY2NvdW50SWQsIHByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hY2NvdW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXJBY2NvdW50SWQsIHByb3ZpZGVyIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlQXV0aGVudGljYXRvcihhdXRoZW50aWNhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hdXRoZW50aWNhdG9yXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXV0aGVudGljYXRvcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnJvbURCQXV0aGVudGljYXRvcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldEF1dGhlbnRpY2F0b3IoY3JlZGVudGlhbElEKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdG9yID0gYXdhaXQgcC5hdXRoZW50aWNhdG9yLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNyZWRlbnRpYWxJRCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYXV0aGVudGljYXRvciA/IGZyb21EQkF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBsaXN0QXV0aGVudGljYXRvcnNCeVVzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0b3JzID0gYXdhaXQgcC5hdXRoZW50aWNhdG9yLmZpbmRNYW55KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0b3JzLm1hcChmcm9tREJBdXRoZW50aWNhdG9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlQXV0aGVudGljYXRvckNvdW50ZXIoY3JlZGVudGlhbElELCBjb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5hdXRoZW50aWNhdG9yXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY3JlZGVudGlhbElEOiBjcmVkZW50aWFsSUQgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNvdW50ZXIgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnJvbURCQXV0aGVudGljYXRvcik7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZyb21EQkF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikge1xuICAgIGNvbnN0IHsgdHJhbnNwb3J0cywgaWQsIHVzZXIsIC4uLm90aGVyIH0gPSBhdXRoZW50aWNhdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm90aGVyLFxuICAgICAgICB0cmFuc3BvcnRzOiB0cmFuc3BvcnRzIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJwIiwiY3JlYXRlVXNlciIsImlkIiwiX2lkIiwiZGF0YSIsInVzZXIiLCJjcmVhdGUiLCJnZXRVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZ2V0VXNlckJ5RW1haWwiLCJlbWFpbCIsImdldFVzZXJCeUFjY291bnQiLCJwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCIsImFjY291bnQiLCJzZWxlY3QiLCJ1cGRhdGVVc2VyIiwidXBkYXRlIiwiZGVsZXRlVXNlciIsImRlbGV0ZSIsImxpbmtBY2NvdW50IiwidW5saW5rQWNjb3VudCIsImdldFNlc3Npb25BbmRVc2VyIiwic2Vzc2lvblRva2VuIiwidXNlckFuZFNlc3Npb24iLCJzZXNzaW9uIiwiaW5jbHVkZSIsImNyZWF0ZVNlc3Npb24iLCJ1cGRhdGVTZXNzaW9uIiwiZGVsZXRlU2Vzc2lvbiIsImNyZWF0ZVZlcmlmaWNhdGlvblRva2VuIiwidmVyaWZpY2F0aW9uVG9rZW4iLCJ1c2VWZXJpZmljYXRpb25Ub2tlbiIsImlkZW50aWZpZXJfdG9rZW4iLCJlcnJvciIsImNvZGUiLCJnZXRBY2NvdW50IiwicHJvdmlkZXJBY2NvdW50SWQiLCJwcm92aWRlciIsImZpbmRGaXJzdCIsImNyZWF0ZUF1dGhlbnRpY2F0b3IiLCJhdXRoZW50aWNhdG9yIiwidGhlbiIsImZyb21EQkF1dGhlbnRpY2F0b3IiLCJnZXRBdXRoZW50aWNhdG9yIiwiY3JlZGVudGlhbElEIiwibGlzdEF1dGhlbnRpY2F0b3JzQnlVc2VySWQiLCJ1c2VySWQiLCJhdXRoZW50aWNhdG9ycyIsImZpbmRNYW55IiwibWFwIiwidXBkYXRlQXV0aGVudGljYXRvckNvdW50ZXIiLCJjb3VudGVyIiwidHJhbnNwb3J0cyIsIm90aGVyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/prisma-adapter/index.js\n");

/***/ })

};
;