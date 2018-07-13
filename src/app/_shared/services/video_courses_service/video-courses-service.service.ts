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
    }
  ];

  constructor() { }

  public getVideoCourses(index: number): VideoCourseItem[] {
    return this.videoCourseSource.slice(0, index);
  }

  public getAllVideoCourses() {
    return this.videoCourseSource;
  }

  public checkIfSourceHaveMoreElements(length: number): boolean {
    return length <= this.videoCourseSource.length;
  }
}
