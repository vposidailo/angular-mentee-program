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
    return this.videoCourseSource.find(item => item.id === id);
  }

  public createVideoCourseItem(item: VideoCourseItem): VideoCourseItem[] {
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

    if (updateItemIndex > -1) {
      return this.videoCourseSource;
    }

    this.videoCourseSource[updateItemIndex] = item;
    return this.videoCourseSource;
  }

  public checkIfSourceHaveMoreElements(length: number): boolean {
    return length <= this.videoCourseSource.length;
  }
}
