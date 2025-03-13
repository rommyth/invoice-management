# RMInvoiceMan

This project is a React Native application following Clean Architecture principles. The application is structured to separate concerns and improve maintainability and testability.

## Project Structure

```sh
src/
│── App.tsx
│
├── application/ # Global app configurations (optional)
│ ├── navigations/ # Navigation logic
│ |
│ ├── redux/ # Global state management
| |
| ├── utils/ # Helper functions
│ │
│ ├── assets/ # Static assets (icons, images, etc.)
│
├── data/ # Data layer (repositories, APIs, etc.)
│ ├── api/ # API clients and endpoints
│ │ ├── Api.ts
│ │ ├── Axios.instance.ts
│ │
│ ├── repositories/ # Implementations of repositories
│ │ ├── UserRepository.ts
│ │ ├── UserRepositoryImpl.ts
│ │
│ ├── models/ # Data models
│ │ ├── UserModel.ts
│
├── domain/ # Business logic (Use Cases, Entities, etc.)
│ ├── usecases/ # All application-specific business logic
│ │ ├── user/
│ │ │ ├── GetListUserUseCase.ts
│ │
│ ├── schema/ # Validation schemas payload like body or params
│
├── presentation/ # UI Layer (Screens, Components, Hooks)
│ ├── screens/ # Screens of the app
│ │ ├── HomeScreen.tsx
│ │
│ ├── components/ # Reusable UI components
│ │
│ ├── hooks/ # Custom hooks
│ │ ├── useHome.ts
```

### Explanation

- **App.tsx**: The entry point of the application where the `QueryClientProvider` is set up for `react-query`.

- **application/**: Contains application-level utilities, navigation, and state management (e.g., Redux).

- **data/**: Contains the data layer of the application.

  - **api/**: Contains API-related files.
    - `Api.ts`: Defines API endpoints.
    - `Axios.instance.ts`: Configures and exports an Axios instance.
  - **models/**: Contains domain models.
    - `UserModel.ts`: Defines the user model.
  - **repository/**: Contains repository implementations.
    - `UserRepositoryImpl.ts`: Implements the `UserRepository` interface for user-related data operations.

- **domain/**: Contains the core business logic of the application.

  - **repository/**: Contains repository interfaces.
    - `UserReposistory.ts`: Defines the `UserRepository` interface.
  - **schema/**: Contains validation schemas (if any).
  - **usecases/**: Contains use cases that encapsulate business logic.
    - `user/getListUserUsecase.ts`: Defines the use case for fetching the list of users.

- **presentation/**: Contains the presentation layer of the application.
  - **assets/**: Contains static assets like images and fonts.
  - **components/**: Contains reusable UI components.
  - **hooks/**: Contains custom hooks.
    - `useHome.ts`: Custom hook for the Home screen.
  - **screens/**: Contains screen components.
    - `Home.screen.tsx`: The Home screen component.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/RMInvoiceMan.git
   cd RMInvoiceMan
   ```
