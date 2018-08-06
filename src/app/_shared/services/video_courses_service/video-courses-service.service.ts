import { Injectable } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';

@Injectable()

export class VideoCoursesServiceService {
  private videoCourseSource: VideoCourseItem[] = [
    {
      id: 1,
      Title: 'Practical LINQ',
      // tslint:disable-next-line:max-line-length
      Description: 'This course covers practical uses of Language Integrated Query (LINQ). With LINQ, you can search, sort, create, compare and analyze your data. And you can use LINQ to manipulate and shape your data for display in a user interface. With its common syntax, strong typing, Intellisense support, and transformational features, like the internet, you will wonder how you ever coded without it. Enjoy!',
      Duration: 212,
      Creationdate: new Date(2018, 6, 1),
      IsTopRated: true
    },
    {
      id: 2,
      Title: 'Using GitFlow',
      // tslint:disable-next-line:max-line-length
      Description: 'GitFlow is a set of rules that gives users of Git a set of best practices to use when using Git. The set rules govern how to setup Git branches, which branches to have, when to create feature branches, when and what to tag, and when to merge and to which branch. The idea being that with a set of rules to follow using any source control system becomes easier. GitFlow does not add anything new to established workflows such as the feature branch workflow. What it does, though, is to give specific roles to different branches and defines how and when they should interact. The workflow uses feature branches as well as individual branches for preparing, maintaining, and recording releases. You also get the benefits of the feature branch workflow such as pull requests and more efficient collaboration.',
      Duration: 64,
      Creationdate: new Date(2018, 6, 30),
      IsTopRated: false
    },
    {
      id: 3,
      Title: 'ASP.NET Core Tag Helpers',
      // tslint:disable-next-line:max-line-length
      Description: 'Tag Helpers are one of the new technologies in ASP.NET Core that making building web pages (Razor view pages) much easier and more intuitive for both designers and developers. In this course, ASP.NET Core Tag Helpers, you will learn the fundamentals of Tag Helpers. First, you will explore how to effectively use the 17 Tag Helpers built into ASP.NET Core on your Razor view pages to build forms. Next, you will explore cache images. Finally, you will customize anchor tags and build a JavaScript manager that takes advantage of many Tag Helper and ASP.NET Core features. By the end of the course, youXC60ll be able to efficiently author both simple and advanced Tag Helpers.',
      Duration: 168,
      Creationdate: new Date(2017, 1, 20),
      IsTopRated: true
    },
    {
      id: 4,
      Title: 'Accelerated C# Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'Formerly titled "C# Fundamentals - Part 1," this course is designed to give C++ and Java developers an accelerated introduction to C# on the .NET platform. For a beginner-level introduction to C#, refer to "C# Fundamentals with C# 5.0.',
      Duration: 377,
      Creationdate: new Date(2010, 3, 26),
      IsTopRated: true
    },
    {
      id: 5,
      Title: 'Angular: Getting Started',
      // tslint:disable-next-line:max-line-length
      Description: 'Angular is one of the fastest, most popular open source web app frameworks today, and knowing how to use it is essential for developers. You will learn how to create components and user interfaces, data-binding, retrieving data using HTTP, and more.',
      Duration: 340,
      Creationdate: new Date(2018, 7, 11),
      IsTopRated: true
    },
    {
      id: 6,
      Title: 'Getting Started with Building Bots with Microsoft\'s Bot Framework',
      // tslint:disable-next-line:max-line-length
      Description: 'This course is an introduction to the Microsoft Bot Framework - a new centralized framework that allows you to create, edit and deploy Chatbots quickly and easily.',
      Duration: 149,
      Creationdate: new Date(2018, 7, 11),
      IsTopRated: false
    },
    {
      id: 7,
      Title: 'Angular Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'This course will teach you the fundamentals of working with the latest version of Angular. You will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.',
      Duration: 575,
      Creationdate: new Date(2018, 7, 3),
      IsTopRated: false
    },
    {
      id: 8,
      Title: 'Become a Full-stack .NET Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Have you always wanted to see how professional, experienced developers build an application from A to Z? This course will show you how. You\'ll build a real-world mini social networking application with ASP.NET MVC 5 and Entity Framework 6.',
      Duration: 334,
      Creationdate: new Date(2016, 3, 25),
      IsTopRated: false
    },
    {
      id: 9,
      Title: 'Python Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'Python Fundamentals gets you started with Python, a dynamic language popular for web development, big data, science, and scripting.',
      Duration: 311,
      Creationdate: new Date(2017, 9, 26),
      IsTopRated: false
    },
    {
      id: 10,
      Title: 'Docker for Web Developers',
      // tslint:disable-next-line:max-line-length
      Description: 'Docker can bring many benefits to your development workflow and deployment process. You\'ll learn how to use Docker tools and commands, how to work with images and containers, container orchestration techniques, and much more.',
      Duration: 341,
      Creationdate: new Date(2018, 7, 20),
      IsTopRated: false
    },
    {
      id: 11,
      Title: 'Building a JavaScript Development Environment',
      // tslint:disable-next-line:max-line-length
      Description: 'Starting a new JavaScript project from scratch is overwhelming. This course provides a playbook outlining the key decisions you need to make. Build a robust development environment that handles bundling, linting, transpiling, testing, and much more.',
      Duration: 319,
      Creationdate: new Date(2016, 10, 10),
      IsTopRated: false
    },
    {
      id: 12,
      Title: 'Understanding Machine Learning',
      // tslint:disable-next-line:max-line-length
      Description: 'Need a short, clear introduction to machine learning? Watch this.',
      Duration: 39,
      Creationdate: new Date(2016, 2, 4),
      IsTopRated: false
    },
    {
      id: 13,
      Title: 'Domain-Driven Design Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'This course teaches the fundamentals of Domain-Driven Design (DDD) through a demonstration of customer interactions and a complex demo application, along with advice from Eric Evans.',
      Duration: 256,
      Creationdate: new Date(2014, 6, 25),
      IsTopRated: true
    },
    {
      id: 14,
      Title: 'Building Your First API with ASP.NET Core',
      // tslint:disable-next-line:max-line-length
      Description: 'Microsoft is moving towards a new direction with its developer frameworks, signified by the cross-platform, modular, and faster ASP.NET Core 1.x/2.0 and Entity Framework Core 1.x/2.0. In this course, you\'ll learn how to build an API with these.',
      Duration: 261,
      Creationdate: new Date(2017, 8, 11),
      IsTopRated: true
    },
    {
      id: 15,
      Title: 'Building Mobile Apps with Ionic, Angular, and TypeScript',
      // tslint:disable-next-line:max-line-length
      Description: 'This code-focused course explores the exciting new Ionic framework and shows how to build mobile apps using Angular and TypeScript.',
      Duration: 247,
      Creationdate: new Date(2016, 10, 13),
      IsTopRated: true
    },
    {
      id: 16,
      Title: 'AngularJS: Get Started',
      // tslint:disable-next-line:max-line-length
      Description: 'This course demonstrates how to use the essential abstractions of AngularJS, including modules, controllers, directives, and services.',
      Duration: 178,
      Creationdate: new Date(2014, 7, 6),
      IsTopRated: false
    },
    {
      id: 16,
      Title: 'React.js: Getting Started',
      // tslint:disable-next-line:max-line-length
      Description: 'Learn the basics of React.js, and build an in-browser, math skills kids\' game from scratch with it.',
      Duration: 103,
      Creationdate: new Date(2017, 4, 12),
      IsTopRated: false
    },
    {
      id: 17,
      Title: 'Spring Security Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'A course covering the fundamentals of using Spring Security for securing Java applications built with Spring MVC.',
      Duration: 248,
      Creationdate: new Date(2014, 4, 3),
      IsTopRated: false
    },
    {
      id: 18,
      Title: 'Building Applications with ASP.NET MVC 4',
      // tslint:disable-next-line:max-line-length
      Description: 'This course is a comprehensive introduction to ASP.NET MVC 4, and will give you the essentials you need to start building applications with Microsoft\'s MVC framework.',
      Duration: 443,
      Creationdate: new Date(2012, 10, 8),
      IsTopRated: false
    },
    {
      id: 19,
      Title: 'Understanding Machine Learning with Python',
      // tslint:disable-next-line:max-line-length
      Description: 'Use your data to predict future events with the help of machine learning. This course will walk you through creating a machine learning prediction solution and will introduce Python, the scikit-learn library, and the Jupyter Notebook environment.',
      Duration: 114,
      Creationdate: new Date(2016, 3, 17),
      IsTopRated: false
    },
    {
      id: 20,
      Title: 'Advanced Node.js',
      // tslint:disable-next-line:max-line-length
      Description: 'This course will teach you the core Node.js concepts and API modules from simple utility modules all the way to streams and clusters.',
      Duration: 225,
      Creationdate: new Date(2017, 2, 16),
      IsTopRated: false
    },
    {
      id: 21,
      Title: 'ASP.NET Core Fundamentals',
      // tslint:disable-next-line:max-line-length
      Description: 'This course will cover the fundamentals of what you need to know to start building your first ASP.NET Core application with the MVC framework.',
      Duration: 349,
      Creationdate: new Date(2017, 11, 9),
      IsTopRated: true
    },
    {
      id: 22,
      Title: 'What Every Developer Must Know About HTTPS',
      // tslint:disable-next-line:max-line-length
      Description: 'HTTPS is an essential component of any software running on the web. This course teaches developers how to get their apps talking securely over the web, while avoiding the common pitfalls so many sites fall victim to.',
      Duration: 304,
      Creationdate: new Date(2017, 4, 12),
      IsTopRated: true
    },
    {
      id: 22,
      Title: 'Clean Architecture: Patterns, Practices, and Principles',
      // tslint:disable-next-line:max-line-length
      Description: 'In this course, you will learn about Clean Architecture, a set of modern patterns, practices, and principles for creating software architecture that is simple, understandable, flexible, testable, and maintainable.',
      Duration: 141,
      Creationdate: new Date(2017, 1, 11),
      IsTopRated: true
    }
  ];

  constructor() { }

  public getVideoCourses(index: number): VideoCourseItem[] {
    return this.videoCourseSource.slice(0, index);
  }

  public getAllVideoCourses() {
    return this.videoCourseSource;
  }

  public getVideoCoursesById(id: number): VideoCourseItem {
    return this.videoCourseSource.find(element => element.id === id);
  }

  public createVideoCourseItem(item: VideoCourseItem): VideoCourseItem[] {
    item.id = this.videoCourseSource.length + 1;
    this.videoCourseSource.push(item);
    return this.videoCourseSource;
  }

  public removeVideoCourseItem(item: VideoCourseItem): VideoCourseItem[] {
    const removedItemIndex = this.videoCourseSource.findIndex(arrItem => arrItem.id === item.id);
    this.videoCourseSource.splice(removedItemIndex, 1);

    return this.videoCourseSource;
  }

  public updateVideoCourceItem(item: VideoCourseItem): VideoCourseItem[] {
    const updateItemIndex = this.videoCourseSource.findIndex(arrItem => arrItem.id === item.id);

    if (updateItemIndex === -1) {
      return this.videoCourseSource;
    }

    this.videoCourseSource[updateItemIndex] = item;
    return this.videoCourseSource;
  }

  public checkIfSourceHaveMoreElements(length: number): boolean {
    return length <= this.videoCourseSource.length;
  }
}
